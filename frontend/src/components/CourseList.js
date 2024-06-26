import React from 'react';
import { Link } from 'react-router-dom';
import { Button, List, Typography, Row, Col, Pagination } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const CourseList = ({ courses, currentPage, coursesPerPage, paginate, totalCourses }) => {
    const indexOfLastCourse = currentPage * coursesPerPage;
    const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
    const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

    return (
        <div>
            <List
                itemLayout="vertical"
                dataSource={currentCourses}
                renderItem={course => (
                    <List.Item key={course.course_id}>
                        <Row align="middle">
                            <Col span={20}>
                                <Link to={`/course/${course.course_id}`}>
                                    <Title level={4}>{course.course_code} - {course.course_name}</Title>
                                </Link>
                                <Paragraph>
                                    {`${course.academicCommittee} | `}
                                    {`${course.level} | `}
                                    {`${course.location} | `}
                                    {`${course.semesterSchedule} | `}
                                    {`${course.creditPoints}`}
                                </Paragraph>
                            </Col>
                            <Col span={2} style={{ textAlign: 'right' }}>
                                <Button type="primary" icon={<StarOutlined />} style={{ marginLeft: '10px' }} />
                            </Col>
                        </Row>
                    </List.Item>
                )}
            />
            {currentCourses.length > 0 && (
                <Pagination
                    current={currentPage}
                    total={totalCourses}
                    pageSize={coursesPerPage}
                    onChange={paginate}
                    showSizeChanger={false}
                    style={{ marginTop: '20px', textAlign: 'center' }}
                />
            )}
        </div>
    );
};

export default CourseList;
