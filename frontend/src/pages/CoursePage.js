import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import CourseList from '../components/CourseList';
import SearchBar from '../components/SearchBar';
import MyCourses from '../components/MyCourses';
import CourseDetailPage from '../components/CourseDetailPage';
import courses from '../data/courses';
import '../App.css';

const CoursePage = ({myCourses}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const coursesPerPage = 5;

    const filteredCourses = courses.filter(course =>
        course.course_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.course_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalCourses = filteredCourses.length;

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
        setCurrentPage(1);
    };

    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div>
            <h1
                style={{
                    fontFamily: 'monospace',
                    lineHeight: '56px',
                    margin: '30px 0',
                    textAlign: 'center',
                    fontSize: '36px',
                }}>
                Course Insight and Skills Alignment Platform
            </h1>
            <SearchBar
                searchQuery={searchTerm}
                handleSearchChange={handleSearchChange}
            />
            <div style={styles.container}>
                <div style={styles.myCourses}>
                    <MyCourses myCourses={myCourses} />
                </div>
                <div style={styles.courseList}>
                    <CourseList
                        courses={filteredCourses}
                        currentPage={currentPage}
                        coursesPerPage={coursesPerPage}
                        paginate={paginate}
                        totalCourses={totalCourses}
                    />
                </div>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '30px 10%',
        alignItems: 'flex-start',
    },
    myCourses: {
        flex: '1 1 30%',
        minWidth: '300px',
        marginRight: '50px',
    },
    courseList: {
        flex: '1 1 60%',
        minWidth: '300px',
    },
    '@media (max-width: 768px)': {
        container: {
            flexDirection: 'column',
        },
        myCourses: {
            width: '100%',
            marginRight: '0',
            marginBottom: '20px',
        },
        courseList: {
            width: '100%',
        },
    },
};

export default CoursePage;
