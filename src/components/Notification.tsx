/* eslint-disable @typescript-eslint/no-explicit-any */
import Activities from "./Activities";
import Comment from "./Comment";

const Notification = ({ a }: any) => {
  return (
    <div className="h-full flex-1 overflow-auto p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{a.name}</h1>
          <h4 className="text-xl font-semibold">{a.task}</h4>
          <p className="flex flex-col items-start gap-1 text-xs text-grey">
            Sub-issue of <span className="uppercase font-light">{a.team}</span>
            <span className=" font-normal leading-3 tracking-normal text-sm"> {a.about}</span>
          </p>
        </div>
        <div className="flex h-fit w-full border-b border-border pb-8 text-sm font-semibold text-canceled">
          <h2>{a.message} </h2>
        </div>
        <Activities message={a} />
        <Comment comment={a} postId={a._id} />
      </div>
    </div>
  );
};

export default Notification;
