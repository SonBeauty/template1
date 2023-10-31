import html2canvas from "html2canvas";

export const handleExport = (componentRef) => {
  html2canvas(componentRef.current).then((canvas) => {
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "image.png";
      a.click();
      URL.revokeObjectURL(url);
    });
  });
};
