import { useInView } from 'react-intersection-observer';
import { reviews } from '../data/reviews';
import { ReviewCard } from './ReviewCard';

export function Reviews() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div ref={ref} className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((review, index) => (
        <ReviewCard
          key={review.author}
          review={review}
          index={index}
          inView={inView}
        />
      ))}
    </div>
  );
}