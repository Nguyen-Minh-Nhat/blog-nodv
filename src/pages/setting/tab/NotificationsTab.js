import Recommen from "../components/NotificationTab/Recommen";
import WriterPublic from "../components/NotificationTab/WriterPublic";
import SocialActivity from "../components/NotificationTab/SocialActivity";
import Writers from "../components/NotificationTab/Writers";
import Others from "../components/NotificationTab/Others";
const NotificationsTab = () => {
  return (
    <div>
      <Recommen></Recommen>
      <div className="border-b"></div>
      <WriterPublic></WriterPublic>
      <div className="border-b"></div>
      <SocialActivity></SocialActivity>
      <div className="border-b"></div>
      <Writers></Writers>
      <div className="border-b"></div>
      <Others></Others>
    </div>
  );
};

export default NotificationsTab;
