import { PDFDocument } from "pdf-lib";

export async function downloadPrayerPdf(
  pagePaths: readonly string[],
  filename: string,
): Promise<void> {
  const pdfDoc = await PDFDocument.create();

  for (const path of pagePaths) {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load prayer page: ${path}`);
    }

    const imageBytes = await response.arrayBuffer();
    const image = await pdfDoc.embedPng(imageBytes);
    const { width, height } = image;

    const page = pdfDoc.addPage([width, height]);
    page.drawImage(image, { x: 0, y: 0, width, height });
  }

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([Uint8Array.from(pdfBytes)], {
    type: "application/pdf",
  });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
