import { cn } from "@/lib/utils";

interface TimelineItemProps {
  title: string;
  description: string;
  learnedFrom: string;
  isLast?: boolean;
  className?: string;
  date?: string;
}

export function TimelineItem({
  title,
  description,
  learnedFrom,
  isLast = false,
  className,
  date,
}: TimelineItemProps) {
  return (
    <div className={cn("relative flex gap-4 pb-10", className)}>
      <div className="absolute left-0 top-0 h-full w-10">
        <div className="absolute left-1/2 top-0 h-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 to-transparent" />
        <div className="absolute left-1/2 top-4 h-full w-0.5 -translate-x-1/2 bg-gradient-to-b from-gray-200 to-transparent" />
        {!isLast && (
          <div className="absolute left-1/2 top-4 h-full w-0.5 -translate-x-1/2 bg-gray-200" />
        )}
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-indigo-500 bg-white" />
      </div>
      
      <div className="ml-10 flex-1">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-medium text-text-primary">{title}</h3>
          {date && (
            <span className="inline-flex items-center rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
              {date}
            </span>
          )}
        </div>
        <p className="mt-1 text-sm text-text-secondary">{description}</p>
        <div className="mt-2">
          <span className="text-xs font-medium text-indigo-600">Learned:</span>
          <p className="text-sm text-text-secondary">{learnedFrom}</p>
        </div>
      </div>
    </div>
  );
}
