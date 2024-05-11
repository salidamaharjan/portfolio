import Button from "./Button";

type DialogProps = {
  children: React.ReactNode;
  title: string;
  open: boolean;
  onClose: () => void
};
export function Dialog({ children, open, title, onClose }: DialogProps) {
  return open ? (
    <div>
      <div className="__overlay flex items-center justify-center bg-gray-400/65 top-0 left-0 h-screen w-screen fixed">
        <div className="__card flex flex-col p-4 shadow-gray-300 border-2 border-gray-400 bg-opacity-100 rounded-md bg-white">
          <div className="flex justify-between text-blue-600 text-center text-xl pb-2 font-bold">
            <div>{title}</div>
            <div>
              <Button className="bg-red-500 text-white"onClick={onClose}>x</Button>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}
