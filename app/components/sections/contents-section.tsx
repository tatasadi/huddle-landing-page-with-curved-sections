import ContentItem from "../content-item"
import illustrationGrowTogether from "@/public/illustration-grow-together.svg"
import illustrationFlowingConversation from "@/public/illustration-flowing-conversation.svg"
import illustrationYourUsers from "@/public/illustration-your-users.svg"

const ContentsSection = () => {
  return (
    <section className="">
      <div className="h-[7rem] w-full bg-[url('/bg-section-top-mobile-1.svg')] bg-cover bg-no-repeat lg:h-[10rem] lg:bg-[url('/bg-section-top-desktop-1.svg')]"></div>
      <ContentItem
        title="Grow Together"
        description="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
        imageSrc={illustrationGrowTogether}
        imageRight
        className="bg-very-pale-blue"
      />
      <div className="h-[7rem] w-full bg-[url('/bg-section-bottom-mobile-1.svg')] bg-cover bg-no-repeat lg:h-[10rem] lg:bg-[url('/bg-section-bottom-desktop-1.svg')]"></div>
      <ContentItem
        title="Flowing Conversations"
        description="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
        imageSrc={illustrationFlowingConversation}
      />
      <div className="h-[7rem] w-full bg-[url('/bg-section-top-mobile-2.svg')] bg-cover bg-no-repeat lg:h-[10rem] lg:bg-[url('/bg-section-top-desktop-2.svg')]"></div>
      <ContentItem
        title="Your Users"
        description="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        imageSrc={illustrationYourUsers}
        imageRight
        className="bg-very-pale-blue"
      />
      <div className="h-[7rem] w-full bg-[url('/bg-section-bottom-mobile-2.svg')] bg-cover bg-no-repeat lg:h-[10rem] lg:bg-[url('/bg-section-bottom-desktop-2.svg')]"></div>
    </section>
  )
}

export default ContentsSection
