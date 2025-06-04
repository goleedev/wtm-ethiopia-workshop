type TodoStatsProps = {
  total: number;
  completed: number;
};

export const TodoStats = ({ total, completed }: TodoStatsProps) => {
  return (
    <p>
      ✅ {completed} / {total} todos completed
    </p>
  );
};
