import CourseScope from '../../app/CourseScope.jsx';
import CourseHeader from '../../app/CourseHeader.jsx';

// Pendent de portar des de la versió original.
export default function Course() {
  return (
    <CourseScope k="comp">
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '24px 16px' }}>
        <CourseHeader k="comp" />
      </div>
    </CourseScope>
  );
}
