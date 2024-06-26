import React, { useState } from 'react';
import { Pagination, Button, List, Typography, Card, Row, Col } from 'antd';

const { Title } = Typography;

const MyCourses = ({ myCourses }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const coursesPerPage = 5;

    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = myCourses.slice(indexOfFirstCourse, indexOfLastCourse);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    const courseStyle = {
        // width: '400px',
        border: '1px solid #C5C5C5',
        borderRadius: '20px',
        padding: '20px',
        boxShadow: '-6px 6px 17px 0px #00000040',
        margin: '10px'
    }
    const titleStyle = {
        borderBottom: '1px solid #C5C5C582',
        paddingBottom: '10px'
    }
    return (
        <div>
            <div style={courseStyle}>
                <Row justify="space-between" align="middle">
                    <Col>
                        <Title style={titleStyle}>My Courses</Title>
                    </Col>
                    <Col>
                        <Button style={{ marginLeft: '10px' }}>Upload</Button>
                    </Col>
                </Row>
                <List
                    itemLayout="vertical"
                    dataSource={currentCourses}
                    renderItem={course => (
                        <List.Item key={course.course_id} style={{ marginBottom: '20px' }}>
                            <span>{course.course_code} - {course.course_name}</span>
                        </List.Item>
                    )}
                />
                <Pagination
                    current={currentPage}
                    total={myCourses.length}
                    pageSize={coursesPerPage}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                    style={{ marginTop: '20px', textAlign: 'center' }}
                />
            </div>
        </div>
    );
};

export default MyCourses;
