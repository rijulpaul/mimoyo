type InfoCardProps = {
    heading?: string;
    content?: string;
    image?: string;
};

export default function InfoCard({ heading, content, image }: InfoCardProps) {
    return (
        <div
            style={{
                flex: 1,
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch"
            }}
        >
            <img
                src={image}
                style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    borderRadius: "2rem"
                }}
            />

            <div style={{ marginTop: "1rem" }}>
                <div
                    style={{
                        fontSize: "1.6rem",
                        lineHeight: "1.2",
                        minHeight: "3.2rem"   // keeps headings aligned
                    }}
                >
                    {heading}
                </div>

                <div
                    style={{
                        fontSize: "0.9rem",
                        lineHeight: "1.4",
                        marginTop: "0.5rem"
                    }}
                >
                    {content}
                </div>
            </div>
        </div>
    );
}