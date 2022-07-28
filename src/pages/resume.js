import React from 'react'
import resume from '../assets/shane-roach-resume.pdf'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const ResumePage = () => {
  return (
    <>
      <h1>Resume</h1>
      <div>
        <Document file={resume}>
          <Page object-fit="fill"  pageNumber={1} />
        </Document>

      </div>

    </>


  )
}

export default ResumePage
