export const getGridStyle = (participantCount: number): React.CSSProperties => {
    // Base grid style
    const baseStyle: React.CSSProperties = {
        display: "grid",
        gap: "10px",
        height: "90vh", // Full height of the viewport,
        alignItems: 'center'
    };

    // Grid definitions for different participant counts
    // const gridStyles: Record<number, React.CSSProperties> = {
    //     1: {
    //         gridTemplateColumns: "1fr", // Full screen for one participant
    //         gridTemplateRows: "1fr",
    //     },
    //     2: {
    //         gridTemplateColumns: "1fr 1fr", // Side by side for two participants
    //         gridTemplateRows: "1fr",
    //     },
    //     3: {
    //         gridTemplateColumns: "1fr 1fr", // 2 on top
    //         gridTemplateRows: "1fr 1fr", // 1 on bottom
    //     },
    //     4: {
    //         gridTemplateColumns: "1fr 1fr", // 2x2 grid for four participants
    //         gridTemplateRows: "1fr 1fr",
    //     },
    // };

    // Default grid for 5 or more participants (up to 16 in this case)
    const defaultGrid = {
        gridTemplateColumns: participantCount === 1 ? "1fr" : "repeat(2, 1fr)",
        gridTemplateRows: `repeat(${Math.ceil(participantCount / 4)}, 1fr)`,
    };

    // Get grid style based on participant count or fallback to default
    const gridStyle = defaultGrid;

    return {
        ...baseStyle,
        ...gridStyle,
    };
};