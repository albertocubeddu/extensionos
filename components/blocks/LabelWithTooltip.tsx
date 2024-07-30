import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "~components/ui/tooltip";
import { CircleHelp } from "lucide-react";
import { Label } from "~components/ui/label";

interface LabelWithTooltipProps {
    key: string
    labelText: string
    tooltipText: string
}

export default function LabelWithTooltip({ key, labelText, tooltipText }: LabelWithTooltipProps) {
    return (
        <TooltipProvider delayDuration={200}>
            <Tooltip>
                <TooltipTrigger className="flex flex-row gap-1">
                    <Label
                        className="text-sm text-gray-600"
                        htmlFor={`${labelText}-${key}`}
                    >
                        {labelText}
                    </Label>
                    <span className="inline-flex items-center gap-1">
                        <CircleHelp size={12} />
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    <p>
                        {tooltipText}
                    </p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )

}