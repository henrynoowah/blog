interface Props {
  [key: string]: any;
}

const PostCard_skeleton = (_: Props) => {
  return (
    <div className="w-full h-[180px] flex flex-col ring-1 ring-primary/20 hover:ring-primary rounded-md bg-gray-400/40 animate-pulse" />
  );
};

export default PostCard_skeleton;
