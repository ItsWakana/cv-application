import React, { Component } from 'react';
import { PDFDownloadLink, Document, Page, Text, StyleSheet, Font } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: { backgroundColor: 'white', fontFamily: 'Helvetica-Bold',color: 'black', display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' },
    heading: { fontSize: '32px' },
    subHeading: { fontSize: '20px', fontWeight: '900' },
    detailBold: { fontSize: '13px', fontFamily: 'Helvetica-Bold'},
    detail: { fontSize: '11px', fontFamily: 'Helvetica'},
    section: { color: 'white', textAlign: 'center', margin: 30 }
});

class CVDocument extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        const {
            personalInfo,
            workExperience,
            educationExperience
        } = this.props.objectInfo;

        return (
            <Document>
                <Page size="A4" style={styles.page}>
                    <Text style={styles.heading}>{personalInfo?.name}</Text>
                    <div>
                        <Text style={styles.detail}>{personalInfo.email}</Text>
                        <Text style={styles.detail}>{personalInfo.phoneNumber}</Text>
                    </div>
                    <Text style={styles.subHeading}>Education</Text>
                    {Array.isArray(educationExperience) && educationExperience.map((obj) => (
                        <div key={obj.id}>
                            <Text style={styles.detailBold}>{obj.schoolName}</Text>
                            <Text style={styles.detail}>{obj.fieldOfStudy}</Text>
                            <Text style={styles.detail}>{obj.dateOfStudy}</Text>
                            <Text style={styles.detail}>---------</Text>
                        </div>
                    ))} 
                    <Text style={styles.subHeading}>Job History</Text>
                    {Array.isArray(workExperience) &&
                    workExperience.map((job) => (
                        <div key={job.id}>
                            <Text style={styles.detailBold}>{job.title}</Text>
                            <Text style={styles.detail}>{job.company}</Text>
                            <Text style={styles.detail}>---------</Text>
                        </div>
                    ))}               
                    
                </Page>
            </Document>
        )
    }
}

class PDFGenerator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { formCompletion } = this.props.cvInfo;
        for (const item of formCompletion) {

            for (const key in item) {
                console.log(item[key])
                if (!item[key]) return;
            }
        }
        
        return (
            <div>
            <PDFDownloadLink document={<CVDocument objectInfo={this.props.cvInfo} />} fileName={`${this.props.cvInfo.personalInfo.name}-CV.pdf`} className="cv-form__pdf-button">
              {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : 'Download PDF')}
            </PDFDownloadLink>
          </div>  
        )
    }
}

export default PDFGenerator;