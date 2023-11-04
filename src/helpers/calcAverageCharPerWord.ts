export default function(text: string[]): number {
    const words = text
        .join(" ")
        .replaceAll("\t", " ")
        .replaceAll("\n", " ")
        .replaceAll(".", " ")
        .split(" ")
        .filter((word) => word !== "");

    return words.join("").length / words.length;
}
