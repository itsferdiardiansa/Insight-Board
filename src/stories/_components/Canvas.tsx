import React, { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/utils/tailwind"
import { Button } from "@/components/ui/button"
import { RiListSettingsLine } from "react-icons/ri"
import { GoChevronDown } from "react-icons/go"

interface CanvasProps {
  children: React.ReactNode
}

const themes = ["light", "dark"]

export const Canvas = ({ children }: CanvasProps) => {
  const [theme, setTheme] = useState("light")

  const story = React.Children.toArray(children).find(
    (child: any) => child.type.displayName === "Canvas.Story"
  )
  const source = React.Children.toArray(children).find(
    (child: any) => child.type.displayName === "Canvas.Source"
  )

  return (
    <div className="my-6 border border-default rounded-lg overflow-hidden">
      {/* Story Area */}
      <div
        className={cn(
          "flex justify-center items-center p-6",
          theme === "dark" ? "bg-[linear-gradient(45deg,#18191a_25%,transparent_25%),linear-gradient(-45deg,#18191a_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#18191a_75%),linear-gradient(-45deg,transparent_75%,#18191a_75%)]"
          : "bg-[linear-gradient(45deg,#f8f8f8_25%,transparent_25%),linear-gradient(-45deg,#f8f8f8_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f8f8f8_75%),linear-gradient(-45deg,transparent_75%,#f8f8f8_75%)]",
          "bg-[length:20px_20px] bg-[position:0_0,0_10px,10px_-10px,-10px_0]",
          theme === "dark" && "bg-[#232323] text-white"
        )}
      >
        <div className="w-full">
          {story}
        </div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center px-space-md py-space-sm bg-[#232323] text-inverse border-y border-secondary">
        <DropdownMenu>
          <DropdownMenuTrigger 
            className="px-space-sm py-space-xs bg-transparent outline-none hover:bg-input-pressed/20 data-[state=open]:bg-input-pressed/20 text-inverse rounded cursor-pointer flex items-center gap-space-xs font-semibold"
          >
            <RiListSettingsLine />
            Preferences

            <GoChevronDown className="ml-space-sm"/>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-[#2B2C2F] border-0!" align="start">
            <div className="min-w-[280px] p-space-sm">
              <h2 className="text-body-sm text-inverse font-semibold">Color Theme</h2>

              <div className="flex items-center justify-stretch gap-space-xs mt-space-sm">
                <Button 
                  className={cn(
                    "border border-secondary bg-transparent hover:bg-input-pressed/20! hover:border-inverse/20",
                    theme === "light" && "bg-input-pressed/20! border-inverse/20! text-inverse!"
                  )}
                  size="sm"
                  onClick={() => setTheme("light")}
                  fullWidth
                >
                  Light
                </Button>

                <Button 
                  className={cn(
                    "border border-secondary bg-transparent hover:bg-input-pressed/20! hover:border-inverse/20",
                    theme === "dark" && "bg-input-pressed/20! border-inverse/20! text-inverse!"
                  )}
                  size="sm"
                  onClick={() => setTheme("dark")}
                  fullWidth
                >
                  Dark
                </Button>
              </div>
            </div>
            {/* <DropdownMenuItem>Light</DropdownMenuItem>
            <DropdownMenuItem>Dark</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>System</DropdownMenuItem> */}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Source */}
      <div className="h-full">
        {source}
      </div>
    </div>
  )
}

const StoryWrapper = ({ children }: { children: React.ReactNode }) => <>{children}</>
StoryWrapper.displayName = "Canvas.Story"

const SourceWrapper = ({ children }: { children: React.ReactNode }) => <>{children}</>
SourceWrapper.displayName = "Canvas.Source"

Canvas.Story = StoryWrapper
Canvas.Source = SourceWrapper