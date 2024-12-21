import { AspectRatio } from "@assets/components/shadcnui/aspect-ratio";
import { Github, Pickaxe } from "lucide-react";
import { Link } from "react-router-dom";

export interface ProjectCardProps {
  pic_link: string;
  pic_alt: string;
  title: string;
  description: string;
  github_link?: string;
  workandprogress: boolean;
}


export default function ProjectCard({ pic_link, pic_alt, title, description, github_link, workandprogress}: ProjectCardProps) {
    return (
        <div className="rounded-2xl bg-gray-900 shadow-2xl shadow-gray-700 border-solid border-2 border-gray-950 group hover:shadow-violet-950 transition-all duration-300">
            <div className="flex flex-col">
                <AspectRatio ratio={16 / 9} className="overflow-hidden">
                    <img
                        draggable="false"
                        src={pic_link}
                        alt={pic_alt}
                        className="h-full w-full object-cover object-center rounded-t-2xl group-hover:scale-110 transition-all duration-300"
                    />
                </AspectRatio>
                <div className="flex flex-col gap-3 p-4">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <p className="text-muted-foreground">{description}</p>
                    <div className="flex flex-row last">
                        {github_link && (
                            <Link to={github_link}>
                                <Github />
                            </Link>
                        )}

                        {workandprogress ? <Pickaxe /> : null}
                    </div>
                </div>
            </div>
        </div>
    )
}