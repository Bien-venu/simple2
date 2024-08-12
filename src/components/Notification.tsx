import Activities from "./Activities";
import Comment from "./Comment";

const Notification = ({ a }: any) => {
  return (
    <div className="h-full flex-1 overflow-auto p-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-semibold">{a.task}</h1>
          <p className="flex items-center gap-1 text-xs text-grey">
            Sub-issue of <span className="uppercase">{a.team}</span>
            <span className="font-semibold text-white"> {a.name}</span>
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
