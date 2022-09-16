
import {
    formInputs,
    textInput
} from './Data.js';

import {
    Section,
    SectionRow,
    SectionColumn,
    TextSection,
    Form
} from '../../components';

import { Container } from '../../GlobalStyles.jsx';

export const Insumos = () => {
    return (
        <>
        <Section>
            <Container>
                <SectionRow>
                    <SectionColumn>
                        <TextSection { ...textInput }/>
                    </SectionColumn>
                    <SectionColumn>
                        <Form { ...formInputs }/>
                    </SectionColumn>
                </SectionRow>
            </Container>
        </Section>
        <Section>
            <Container>
            <SectionRow>
                <SectionColumn>

                </SectionColumn>
                <SectionColumn>

                </SectionColumn>
            </SectionRow>
            </Container>
        </Section>
        <Section>
            <Container>
            <SectionRow>
                <SectionColumn>

                </SectionColumn>
                <SectionColumn>
                    
                </SectionColumn>
            </SectionRow>
            </Container>
        </Section>
        </>
    );
};
