import {ProjectDetail} from "./project-detail/ProjectDetail.tsx";
import {LinkButton} from "../components/LinkButton.tsx";
import {MoveUpRight} from "lucide-react";

export const LabelBeauty = () => {
    return <ProjectDetail
        headingTitle={'label beauty'}
        headingSubtitle={'UX design project for a concept connecting beauty salon and e-shop with professional skincare.'}
        headingExtra={<div>
            <img src="/images/logo-figma.svg" alt="figma-logo"/>
            <LinkButton
                to={'https://www.figma.com/proto/QeqPBGaeX92Arg8sIlDwgE/labelbeauty.cz?node-id=0-1&t=tQIcCxQRM3bZEj8Q-1'}>
                <MoveUpRight/>Figma Project
            </LinkButton>
        </div>}
        headingExtraStyle={'extra-row-left'}

    />
}