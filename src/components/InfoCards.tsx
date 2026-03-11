type InfoCardProps = {
    heading?: string;
    content?: string;
    image?: string;
};

export default function InfoCard({ heading, content, image }: InfoCardProps) {
    return (
        <div style={{ flex: "1", padding: "2rem" }}>
            <img src={image} style={{ width: "100%", borderRadius: "2rem" }}></img>
            <div style={{ padding: "1rem" }}>
                <div style={{ fontSize: "1.6rem", lineHeight: "1.2", padding: "1rem 0" }}>{heading}</div>
                <div style={{ fontSize: "0.9rem", lineHeight: "1.2" }}>{content}</div>
            </div>
        </div>
    )
}