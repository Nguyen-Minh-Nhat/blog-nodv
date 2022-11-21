import Recommend from "../components/NotificationTab/Recommend";
import WriterPublic from "../components/NotificationTab/WriterPublic";
import SocialActivity from "../components/NotificationTab/SocialActivity";
import Writers from "../components/NotificationTab/Writers";
import Others from "../components/NotificationTab/Others";
import BlockSetting from "../components/BlockSetting";
const NotificationsTab = () => {
  return (
    <div>
      <BlockSetting
        tittle="Story recommendations"
        children={<Recommend></Recommend>}
      ></BlockSetting>
      <div className="border-b"></div>
      <BlockSetting
        tittle="From writers and publications"
        children={<WriterPublic></WriterPublic>}
      ></BlockSetting>
      <div className="border-b"></div>
      <BlockSetting
        tittle="Social Activity"
        children={<SocialActivity></SocialActivity>}
      ></BlockSetting>
      <div className="border-b"></div>
      <BlockSetting
        tittle="Writers"
        children={<Writers></Writers>}
      ></BlockSetting>
      <div className="border-b"></div>
      <BlockSetting
        tittle="Others from Medium"
        children={<Others></Others>}
      ></BlockSetting>
    </div>
  );
};

export default NotificationsTab;
