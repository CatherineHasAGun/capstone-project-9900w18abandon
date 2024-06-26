import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button, Descriptions, message } from 'antd';

const { Item } = Descriptions;

const CourseDetailPage = ({ courses, myCourses, setMyCourses }) => {
    const { courseId } = useParams();
    const course = courses.find(course => course.course_id === courseId);

    const handleAddToList = () => {
        if (!myCourses.find(c => c.course_id === course.course_id)) {
            setMyCourses([...myCourses, course]);
            message.success('Course added to your list');
        } else {
            message.warning('Course is already in your list');
        }
    };

    if (!course) {
        return (
            <div>
                <h1>Course not found</h1>
            </div>
        );
    }

    return (
        <div style={{ padding: '20px'}}>
            <h1 style={{margin: '20px'}}>
                {course.course_code} - {course.course_name}
                <Button
                    type="primary"
                    onClick={handleAddToList}
                    style={{ float: 'right', marginLeft: '10px' }}
                >
                    Add to My List
                </Button>
            </h1>

            <Descriptions bordered>
                <Item label="Outline" span={3}>
                    {course.course_outline}
                </Item>
                <Item label="Academic Committee">{course.academicCommittee}</Item>
                <Item label="Level">{course.level}</Item>
                <Item label="Location">{course.location}</Item>
                <Item label="Semester Schedule">{course.semesterSchedule}</Item>
                <Item label="Credit Points">{course.creditPoints}</Item>
            </Descriptions>

            <Link to="/courses">
                <Button style={{ marginTop: '20px' }}>Back to Course Page</Button>
            </Link>
        </div>
    );
};

export default CourseDetailPage;
