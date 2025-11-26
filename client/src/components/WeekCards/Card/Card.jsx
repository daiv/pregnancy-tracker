import './Card.css';
export default function Card({ title, children, icon: Icon }) {
  const hasIcon = Icon && typeof Icon === 'function';

  return <div className='card-container'>
    {hasIcon && (
      <div className='card-icon-wrapper'>
        <Icon className='card-icon' />
      </div>
    )}
    <div className='card-content'>
      <h3 className='card-title'>{title}</h3>
      <p className='card-text'>{children}</p>
    </div>
  </div>
}