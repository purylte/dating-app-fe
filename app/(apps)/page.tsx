"use client";
import SwipeProfile from "@/components/home/SwipeProfile";
import SwipeButton from "@/components/home/SwipeButton";
import Icon from "@/components/Icon";
import fetchAuth from "@/utils/fetchAuth";
import { useEffect, useState } from "react";
import { get } from "http";
import { getFilter } from "@/utils/filter";
import { Button } from "react-daisyui";

type ProfileType = {
  id: number;
  hobi: {
    id: number;
    hobi: string;
  }[];
  genre: {
    id: number;
    genre: string;
  }[];
  teman: [
    {
      username: string;
    }
  ];
  gender: string;
  deskripsi: string;
  domisili: string;
  umur: number;
  user: {
    username: string;
  };
};

type RecomendedType = {
  id: number;
  username: string;
  gender: string;
  age: number;
  location: string;
  description: string;
  hobbies: string[];
  genres: string[];
};
export default function Home() {
  const [recommendeds, setRecommendeds] = useState<RecomendedType[]>([]);
  const [currentRec, setCurrentRec] = useState<RecomendedType>();
  const [doneIdx, setDoneIdx] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    if (!isLoading && doneIdx >= recommendeds.length) {
      setIsLoading(true);
      fetchAuth("recommendation", "recommendation/get_recommendations/", {
        method: "POST",
        body: JSON.stringify(getFilter()),
      })
        .then((res) => {
          res.json().then((data) => {
            const recommendedsList: RecomendedType[] = [];
            data.map((recommended: ProfileType) => {
              recommendedsList.push({
                id: recommended.id,
                username: recommended.user.username,
                gender: recommended.gender,
                age: recommended.umur,
                location: recommended.domisili,
                description: recommended.deskripsi,
                hobbies: recommended.hobi.map((hobi) => hobi.hobi),
                genres: recommended.genre.map((genre) => genre.genre),
              });
            });
            setRecommendeds(recommendedsList);
            setDoneIdx(0);
            setIsLoading(false);
          });
        })
        .catch((err) => {
          setRecommendeds([]);
          setDoneIdx(0);
          setIsLoading(false);
        });
    }
    setCurrentRec(recommendeds[doneIdx]);
  }, [recommendeds, doneIdx, isLoading]);

  const retry = () => {
    fetchAuth("recommendation", "recommendation/get_recommendations/", {
      method: "POST",
      body: JSON.stringify(getFilter()),
    })
      .then((res) => {
        res.json().then((data) => {
          const recommendedsList: RecomendedType[] = [];
          data.map((recommended: ProfileType) => {
            recommendedsList.push({
              id: recommended.id,
              username: recommended.user.username,
              gender: recommended.gender,
              age: recommended.umur,
              location: recommended.domisili,
              description: recommended.deskripsi,
              hobbies: recommended.hobi.map((hobi) => hobi.hobi),
              genres: recommended.genre.map((genre) => genre.genre),
            });
          });
          setRecommendeds(recommendedsList);
          setDoneIdx(0);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        setRecommendeds([]);
        setDoneIdx(0);
        setIsLoading(false);
      });
    setCurrentRec(recommendeds[doneIdx]);
  };

  return (
    <>
      {currentRec && (
        <div className="flex flex-col items-stretch justify-between w-full">
          <div className="grow-[5]">
            <SwipeProfile
              username={currentRec.username}
              age={currentRec.age}
              gender={currentRec.gender}
              hobbies={currentRec.hobbies}
              genres={currentRec.genres}
              description={currentRec.description}
              location={currentRec.location}
              photos={[
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FQKvTkQBuSLZeNbFxQbjWR6.jpg&f=1&nofb=1&ipt=e4a97c31ae1dbd7a4a9e92d83e4bb6edd3f577a222998f5f9453cbc74b94131e&ipo=images",
                "https://www.pockettactics.com/wp-content/sites/pockettactics/2022/05/honkai-star-rail-tier-list-june.jpg",
                "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4%26pid%3DApi&f=1&ipt=3225f133840ac1005f2e522d9103530d631268c3ec0f926980da4885fc97cf02&ipo=images",
              ]}
            />
          </div>
          <div className="w-1/2 flex flex-row items-center justify-between grow">
            <SwipeButton
              text="Left"
              endIcon={<Icon icon="subway:multiply-1" />}
              onClick={() => {
                fetchAuth("swipe", `swipe/dislike/${currentRec.id}`, {
                  method: "POST",
                }).then((res) => {
                  setDoneIdx(doneIdx + 1);
                });
              }}
            />
            <SwipeButton
              text="Right"
              startIcon={<Icon icon="mdi:cards-heart" />}
              onClick={() => {
                fetchAuth("swipe", `swipe/like/${currentRec.id}`, {
                  method: "POST",
                }).then((res) => {
                  // fetchAuth("chat", "api/chat/create", {
                  //   method: "POST",
                  //   body: JSON.stringify({
                  //     agent_username: currentRec.username,
                  //     agent_id: currentRec.id,
                  //   }),
                  // }).finally(() => {
                  setDoneIdx(doneIdx + 1);
                  // });
                });
              }}
            />
          </div>
        </div>
      )}
      {!currentRec && (
        <div className="flex-1 flex flex-col items-center justify-center gap-4">
          <h1 className="text-header">Fetching recommendation...</h1>
          <Button onClick={() => retry()} className="text-subheader">
            Retry
          </Button>
        </div>
      )}
    </>
  );
}
