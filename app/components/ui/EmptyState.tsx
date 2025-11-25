// app/components/EmptyState.tsx
'use client';
import Heading from "./Heading";
const EmptyState = ({}: { showReset?: boolean }) => {
  return (
    <div className="h-[60vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title="Không tìm thấy dữ liệu" subtitle="Thử lại sau nhé" />
    </div>
  );
}
export default EmptyState;