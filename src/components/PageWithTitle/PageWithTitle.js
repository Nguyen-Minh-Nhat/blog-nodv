import Tab from "../Tab";

const PageWithTitle = ({
  title = "Title",
  tabItems,
  children,
  rightComponent,
  onTabChange,
}) => {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex justify-center pt-12">
        <div className="mx-4 basis-[700px]">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-5xl font-bold text-[#292929]">{title}</h2>
            {rightComponent}
          </div>
          {tabItems && <Tab tabItems={tabItems} onChange={onTabChange} />}
        </div>
      </header>
      <main className="flex flex-1 justify-center overflow-y-auto pt-7">
        <div className="mx-4 basis-[700px]">{children}</div>
      </main>
    </div>
  );
};

export default PageWithTitle;
