import { Button } from "@/components/ui/button"
import {
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle
} from "@/components/ui/card"

import { useStorage } from "@plasmohq/storage/hook"

import { Card } from "~components/ui/card"
import { Checkbox } from "~components/ui/checkbox"

import LlmSettings from "./LlmSettings"
import VoiceSettingsOutbound from "./VoiceSettingsOutbound"
import CardHeaderIntro from "~components/blocks/CardHeaderIntro"

export default function OptionsGeneral() {
    const [debugInfo, setDebugInfo] = useStorage("debugInfo", "unchecked")

    return (
        <div className="grid gap-6">
            <LlmSettings debugInfo={debugInfo as string} />
            <VoiceSettingsOutbound debugInfo={debugInfo as string} />

            <Card x-chunk="dashboard-04-chunk-2">
                <CardHeader>
                    <CardHeaderIntro title={"Advanced Settings"} description={" Do not use them unless you're an advanced user and know what you're doing!"} />
                </CardHeader>
                <CardContent>
                    <form className="flex flex-col gap-4">
                        <div className="flex items-center space-x-2">
                            <Checkbox
                                id="include"
                                checked={debugInfo === "checked"}
                                onCheckedChange={(checked) =>
                                    setDebugInfo(checked ? "checked" : "unchecked")
                                }
                            />
                            <label
                                htmlFor="include"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Activate Debug Mode
                            </label>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button className="bg-gradient-to-l from-violet-500 to-orange-500" onClick={() => alert("Settings saved!")}>Save</Button>
                </CardFooter>
            </Card>
        </div >
    )
}
