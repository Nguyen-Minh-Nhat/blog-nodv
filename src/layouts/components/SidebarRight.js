import RecommendTopic from "../../components/RecommendTopic/RecommendTopic";
import Search from "../../components/Search";
import WhoToFollow from "../../components/WhoToFollow/WhoToFollow";

const SidebarRight = () => {
  return (
    <div className="w-[394px] overflow-scroll border-l px-8">
      <div className="mt-4">
        <Search />
        <RecommendTopic />
        <WhoToFollow />
      </div>
    </div>
  );
};

export default SidebarRight;
