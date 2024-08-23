import "./accordion.css";

interface AccordionProps {
    title: string;
    content: string;
    primaryColor?: string;
    secondaryColor?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content, primaryColor, secondaryColor }) => {
    const customStyles = {
        '--primary-color': primaryColor,
        '--secondary-color': secondaryColor,
    } as React.CSSProperties;

    return (
        <>
            <details name='accordion' style={customStyles}>
                <summary>
                    {title}
                </summary>
                <div>
                    <p>{content}</p>
                </div>
            </details>
            <details name='accordion' style={customStyles}>
                <summary>
                    {title}
                </summary>
                <div>
                    <p>{content}</p>
                </div>
            </details>
        </>
    );
};

