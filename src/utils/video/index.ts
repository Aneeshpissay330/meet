export const getGridStyle = (participantCount: number): React.CSSProperties => {
    // Base grid style
    const baseStyle: React.CSSProperties = {
        display: "grid",
        gap: "10px",
        height: "70vh", // Full height of the viewport,
        alignItems: 'center'
    };
    // Default grid for 5 or more participants (up to 16 in this case)
    const defaultGrid = {
        gridTemplateColumns: participantCount === 1 ? "1fr" : "repeat(2, 1fr)",
        gridTemplateRows: `repeat(${Math.ceil(participantCount / 4)}, 1fr)`,
    };
    const gridStyle = defaultGrid;

    return {
        ...baseStyle,
        ...gridStyle,
    };
};