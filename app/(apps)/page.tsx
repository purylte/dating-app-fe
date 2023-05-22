import SwipeProfile from "@/components/home/SwipeProfile";
import SwipeButton from "@/components/home/SwipeButton";
import Icon from "@/components/Icon";

export default function Home() {
  return (
    <main className="flex flex-col items-stretch justify-between">
      <div className="grow-[5]">
        <SwipeProfile
          name="Zefanya"
          age={21}
          work="Research Center"
          education="Universitas Indonesia"
          bio="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque, autem culpa ducimus sapiente, beatae minus commodi voluptatibus quisquam nemo ratione veritatis dignissimos ullam sunt voluptatem nulla at laborum inventore, tempora aliquid. Mollitia molestias excepturi officia. Ipsam in facilis dicta tempore debitis recusandae unde illo, blanditiis, fugiat at nihil quia soluta?"
          photos={[
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.mos.cms.futurecdn.net%2FQKvTkQBuSLZeNbFxQbjWR6.jpg&f=1&nofb=1&ipt=e4a97c31ae1dbd7a4a9e92d83e4bb6edd3f577a222998f5f9453cbc74b94131e&ipo=images",
            "https://www.pockettactics.com/wp-content/sites/pockettactics/2022/05/honkai-star-rail-tier-list-june.jpg",
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.2bJ9_f9aKoGCME7ZIff-ZwHaJ4%26pid%3DApi&f=1&ipt=3225f133840ac1005f2e522d9103530d631268c3ec0f926980da4885fc97cf02&ipo=images",
          ]}
        />
      </div>
      <div className="w-1/2 flex flex-row items-center justify-between grow">
        <SwipeButton text="Left" endIcon={<Icon icon="subway:multiply-1" />} />
        <SwipeButton text="Right" startIcon={<Icon icon="mdi:cards-heart" />} />
      </div>
    </main>
  );
}
