import BookmarkStack from "../BookmarkStack";
import { useLocation, Link } from "react-router-dom";

const BookmarkStackList = ({ bookmarkStackList }) => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="flex flex-col gap-6">
      {bookmarkStackList.map((bookmarkStack, index) => (
        <Link to={`${pathname}/${bookmarkStack.id}`}>
          <BookmarkStack
            pathname={pathname}
            key={`${bookmarkStack.id}-${index}`}
            bookmarkStack={bookmarkStack}
          />
        </Link>
      ))}
    </div>
  );
};

export default BookmarkStackList;
