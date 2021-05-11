import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import pdf from "../assets/static/document.pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface Props {
  styling: any;
  pageHeight: number;
  pageWidth: number;
  pageStyle: any;
}

export const PdfView = (props: Props) => {
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="flex justify-center p-0 m-0">
      <Document
        file={pdf}
        options={{
          cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
          cMapPacked: true,
        }}
        loading="Loading.."
        renderMode="svg"
        className={"rounded-lg shadow-sm " + props.styling}
      >
        <Page
          height={props.pageHeight}
          width={props.pageWidth}
          pageNumber={pageNumber}
          className={props.pageStyle}
        />
      </Document>
    </div>
  );
};
