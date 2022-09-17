
import {
    formInputs,
    textInput,
    textUpdate
} from './Data.js';

import {
    Section,
    SectionRow,
    SectionColumn,
    TextSection,
} from '../../components';

import { Container, Form, FormInput, FormSelect, FormOption } from '../../GlobalStyles.jsx';

const fields = [];

formInputs.forEach( el => {
    let item

    if ( el.type === 'input' ) {
        item = <FormInput name={el.name} placeholder={el.placeholder}/>
    } else if ( el.type === 'select' ) {
        let opts = []

        el.options.forEach( op => opts.push( <FormOption value={op}>{op}</FormOption>) );

        item = (<FormSelect>
                { opts }
            </FormSelect>);
    }
        
    item ? fields.push(item) : null;
});

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
                        <Form>
                            { fields }
                        </Form>
                    </SectionColumn>
                </SectionRow>
            </Container>
        </Section>
        <Section>
            <Container>
            <SectionRow>
                <SectionColumn>
                    <Form>
                        <FormSelect>
                            <FormOption defaultValue=''>Insumos cadastrados</FormOption>
                        </FormSelect>
                        { fields }
                    </Form>
                </SectionColumn>
                <SectionColumn>
                    <TextSection { ...textUpdate }/>
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
