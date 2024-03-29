interface Props {
  current: number;
  full: number;
}

export default function Progress({ current, full }: Props) {
  return (
    <div className="w-full bg-rbp-0 rounded-full h-2.5 dark:bg-rbp-700">
      <div
        className={`bg-rbp-500 h-2.5 rounded-full`}
        style={{ width: `${(current / full) * 100}%` }}
      ></div>
    </div>
  );
}
