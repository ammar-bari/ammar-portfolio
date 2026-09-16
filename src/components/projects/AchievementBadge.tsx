import { Award, FileText, Trophy, Medal, type LucideIcon } from "lucide-react";

export type BadgeTier = "award" | "recognition" | "result";

interface AchievementBadgeProps {
  tier: BadgeTier;
  label: string;
  icon?: "award" | "file-text" | "trophy" | "medal";
}

const iconMap: Record<string, LucideIcon> = {
  award: Award,
  "file-text": FileText,
  trophy: Trophy,
  medal: Medal,
};

const tierStyles: Record<BadgeTier, string> = {
  award:
    "bg-[#FDF3E0] border-[#E5B85C] text-[#7A4E08] hover:border-[#D4A84A]",
  recognition:
    "bg-[#E3F1F2] border-[#7FBCC2] text-[#0B5A63] hover:border-[#5FA2A9]",
  result:
    "bg-transparent border-[#C3CBD2] text-[#4A5568] hover:border-[#9AA4AD]",
};

const AchievementBadge = ({ tier, label, icon }: AchievementBadgeProps) => {
  const Icon = icon ? iconMap[icon] : undefined;

  return (
    <span
      className={[
        "inline-flex max-w-full items-center gap-2 font-mono whitespace-normal",
        "rounded-md border px-3.5 py-2",
        "text-[12.5px] leading-4",
        "transition-colors duration-200",
        tierStyles[tier],
      ].join(" ")}
    >
      {Icon && <Icon size={16} strokeWidth={1.5} className="shrink-0" />}
      {label}
    </span>
  );
};

export default AchievementBadge;
