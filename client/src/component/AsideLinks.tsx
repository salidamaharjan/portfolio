import clsx from "clsx";

type AsideLinksProps = {
  path: string;
  onClick: () => void;
  fontTag: React.ReactNode;
  title: string;
};

function AsideLinks({
  path: username,
  onClick,
  fontTag,
  title,
}: AsideLinksProps) {
  return (
    <div
      className={clsx("flex flex-col", {
        "text-green-600": location.pathname.endsWith(username),
      })}
      onClick={onClick}
    >
      <div className="flex flex-col hover:text-green-600">
        {fontTag}
        <span className="text-xs hover:text-green-600 text-center">
          {title}
        </span>
      </div>
    </div>
  );
}
export default AsideLinks;
