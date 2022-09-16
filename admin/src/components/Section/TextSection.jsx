
import {
    TextWrapper,
    TopLine,
    Heading,
    Subtitle
} from './TextSection.elements.jsx';

export const TextSection = ({ topline, headline, description }) => {
    return (
        <TextWrapper>
            <TopLine>{topline}</TopLine>
            <Heading>{headline}</Heading>
            <Subtitle>{description}</Subtitle>
        </TextWrapper>
    );
};
