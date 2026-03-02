import { useState } from 'react';
import { Clock, Video, Building2, Home, Check, ArrowLeft } from 'lucide-react';

type ConsultationType = 'virtual' | 'showroom' | 'athome';
type Step = 1 | 2 | 3 | 4 | 5;

const Bespoke = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [consultationType, setConsultationType] = useState<ConsultationType | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const consultationOptions = [
    {
      id: 'virtual' as ConsultationType,
      icon: <Video className="w-8 h-8" />,
      title: 'Virtual Consultation',
      description: 'Connect with our diamond experts via video call from anywhere in the world.',
      duration: '45 minutes',
    },
    {
      id: 'showroom' as ConsultationType,
      icon: <Building2 className="w-8 h-8" />,
      title: 'Private Showroom Visit',
      description: 'Experience our collection in person at our exclusive showroom.',
      duration: '60 minutes',
    },
    {
      id: 'athome' as ConsultationType,
      icon: <Home className="w-8 h-8" />,
      title: 'At-Home Preview',
      description: 'We bring a curated selection of diamonds directly to your home.',
      duration: '90 minutes',
    },
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  ];

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep((prev) => (prev + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => (prev - 1) as Step);
    }
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-12">
      {[1, 2, 3, 4, 5].map((step) => (
        <div
          key={step}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            step === currentStep
              ? 'bg-champagne w-8'
              : step < currentStep
              ? 'bg-champagne'
              : 'bg-light-gray'
          }`}
        />
      ))}
    </div>
  );

  if (isSubmitted) {
    return (
      <main className="min-h-screen bg-alabaster pt-32 pb-20">
        <div className="container-luxury px-6 md:px-10 lg:px-20">
          <div className="max-w-2xl mx-auto text-center py-20">
            <div className="w-20 h-20 bg-champagne/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Check className="w-10 h-10 text-champagne" />
            </div>
            <h1 className="font-serif text-h1 text-obsidian uppercase tracking-luxury mb-4">
              BOOKING CONFIRMED
            </h1>
            <p className="font-sans text-body-lg text-warm-gray mb-8">
              Thank you for booking your private consultation. We've sent a confirmation 
              email with all the details. Our team will contact you shortly.
            </p>
            <div className="bg-white p-8 mb-8">
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <p className="font-sans text-label uppercase tracking-label text-warm-gray mb-1">
                    CONSULTATION TYPE
                  </p>
                  <p className="font-serif text-h3 text-obsidian">
                    {consultationOptions.find(o => o.id === consultationType)?.title}
                  </p>
                </div>
                <div>
                  <p className="font-sans text-label uppercase tracking-label text-warm-gray mb-1">
                    DATE & TIME
                  </p>
                  <p className="font-serif text-h3 text-obsidian">
                    {selectedDate} at {selectedTime}
                  </p>
                </div>
              </div>
            </div>
            <a
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 bg-obsidian text-alabaster font-sans text-label uppercase tracking-label hover:bg-champagne hover:text-obsidian transition-all duration-400"
            >
              RETURN HOME
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-alabaster pt-32 pb-20">
      <div className="container-luxury px-6 md:px-10 lg:px-20">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-sans text-label uppercase tracking-label text-champagne mb-3">
            BESPOKE SERVICE
          </p>
          <h1 className="font-serif text-h1 md:text-[56px] md:leading-[64px] text-obsidian uppercase tracking-luxury">
            BOOK YOUR CONSULTATION
          </h1>
          <p className="font-sans text-body text-warm-gray mt-4 max-w-xl mx-auto">
            Begin your bespoke journey with a private consultation tailored to your needs.
          </p>
        </div>

        {renderStepIndicator()}

        {/* Step 1: Choose Experience */}
        {currentStep === 1 && (
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-h2 text-obsidian uppercase tracking-luxury mb-8 text-center">
              CHOOSE YOUR EXPERIENCE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {consultationOptions.map((option) => (
                <button
                  key={option.id}
                  onClick={() => {
                    setConsultationType(option.id);
                    handleNext();
                  }}
                  className={`p-8 text-left border transition-all duration-300 ${
                    consultationType === option.id
                      ? 'border-champagne bg-champagne/5'
                      : 'border-light-gray hover:border-champagne/50'
                  }`}
                >
                  <div className="text-champagne mb-4">{option.icon}</div>
                  <h3 className="font-serif text-h3 text-obsidian uppercase tracking-luxury mb-2">
                    {option.title}
                  </h3>
                  <p className="font-sans text-caption text-warm-gray mb-4">
                    {option.description}
                  </p>
                  <div className="flex items-center gap-2 font-sans text-caption text-champagne">
                    <Clock className="w-4 h-4" />
                    {option.duration}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Select Date & Time */}
        {currentStep === 2 && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 font-sans text-caption text-warm-gray hover:text-obsidian mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK
            </button>
            <h2 className="font-serif text-h2 text-obsidian uppercase tracking-luxury mb-8">
              SELECT DATE & TIME
            </h2>
            
            {/* Date Selection */}
            <div className="mb-8">
              <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-4">
                PREFERRED DATE
              </label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 bg-white border border-light-gray font-sans text-body focus:border-champagne focus:outline-none"
              />
            </div>

            {/* Time Selection */}
            {selectedDate && (
              <div className="mb-8">
                <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-4">
                  PREFERRED TIME
                </label>
                <div className="grid grid-cols-4 gap-3">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 font-sans text-caption transition-all duration-300 ${
                        selectedTime === time
                          ? 'bg-obsidian text-alabaster'
                          : 'bg-white border border-light-gray hover:border-champagne'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {selectedDate && selectedTime && (
              <button
                onClick={handleNext}
                className="w-full py-4 bg-obsidian text-alabaster font-sans text-label uppercase tracking-label hover:bg-champagne hover:text-obsidian transition-all duration-400"
              >
                CONTINUE
              </button>
            )}
          </div>
        )}

        {/* Step 3: Your Preferences */}
        {currentStep === 3 && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 font-sans text-caption text-warm-gray hover:text-obsidian mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK
            </button>
            <h2 className="font-serif text-h2 text-obsidian uppercase tracking-luxury mb-8">
              YOUR PREFERENCES
            </h2>
            
            <div className="space-y-6">
              <div>
                <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-4">
                  BUDGET RANGE
                </label>
                <select className="w-full px-4 py-3 bg-white border border-light-gray font-sans text-body focus:border-champagne focus:outline-none">
                  <option>Select budget range</option>
                  <option>$5,000 - $10,000</option>
                  <option>$10,000 - $20,000</option>
                  <option>$20,000 - $50,000</option>
                  <option>$50,000+</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-4">
                  DIAMOND SHAPE (Optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Round', 'Princess', 'Emerald', 'Oval', 'Cushion', 'Pear'].map((shape) => (
                    <button
                      key={shape}
                      className="px-4 py-2 bg-white border border-light-gray font-sans text-caption hover:border-champagne transition-colors duration-300"
                    >
                      {shape}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-4">
                  METAL PREFERENCE (Optional)
                </label>
                <div className="flex gap-3">
                  {['Platinum', 'White Gold', 'Yellow Gold', 'Rose Gold'].map((metal) => (
                    <button
                      key={metal}
                      className="px-4 py-2 bg-white border border-light-gray font-sans text-caption hover:border-champagne transition-colors duration-300"
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-4">
                  ADDITIONAL NOTES
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision..."
                  className="w-full px-4 py-3 bg-white border border-light-gray font-sans text-body focus:border-champagne focus:outline-none resize-none"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 bg-obsidian text-alabaster font-sans text-label uppercase tracking-label hover:bg-champagne hover:text-obsidian transition-all duration-400 mt-8"
            >
              CONTINUE
            </button>
          </div>
        )}

        {/* Step 4: Contact Details */}
        {currentStep === 4 && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 font-sans text-caption text-warm-gray hover:text-obsidian mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK
            </button>
            <h2 className="font-serif text-h2 text-obsidian uppercase tracking-luxury mb-8">
              CONTACT DETAILS
            </h2>
            
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-2">
                    FIRST NAME *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-light-gray font-sans text-body focus:border-champagne focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-2">
                    LAST NAME *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white border border-light-gray font-sans text-body focus:border-champagne focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white border border-light-gray font-sans text-body focus:border-champagne focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-2">
                  PHONE *
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white border border-light-gray font-sans text-body focus:border-champagne focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block font-sans text-label uppercase tracking-label text-obsidian mb-2">
                  LOCATION
                </label>
                <input
                  type="text"
                  placeholder="City, Country"
                  className="w-full px-4 py-3 bg-white border border-light-gray font-sans text-body focus:border-champagne focus:outline-none"
                />
              </div>
            </div>

            <button
              onClick={handleNext}
              className="w-full py-4 bg-obsidian text-alabaster font-sans text-label uppercase tracking-label hover:bg-champagne hover:text-obsidian transition-all duration-400 mt-8"
            >
              CONTINUE
            </button>
          </div>
        )}

        {/* Step 5: Confirmation */}
        {currentStep === 5 && (
          <div className="max-w-2xl mx-auto">
            <button
              onClick={handleBack}
              className="flex items-center gap-2 font-sans text-caption text-warm-gray hover:text-obsidian mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              BACK
            </button>
            <h2 className="font-serif text-h2 text-obsidian uppercase tracking-luxury mb-8">
              REVIEW & CONFIRM
            </h2>
            
            <div className="bg-white p-8 mb-8">
              <div className="space-y-6">
                <div className="flex justify-between items-start pb-6 border-b border-light-gray">
                  <div>
                    <p className="font-sans text-label uppercase tracking-label text-warm-gray mb-1">
                      CONSULTATION TYPE
                    </p>
                    <p className="font-serif text-h3 text-obsidian">
                      {consultationOptions.find(o => o.id === consultationType)?.title}
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="font-sans text-caption text-champagne hover:underline"
                  >
                    EDIT
                  </button>
                </div>

                <div className="flex justify-between items-start pb-6 border-b border-light-gray">
                  <div>
                    <p className="font-sans text-label uppercase tracking-label text-warm-gray mb-1">
                      DATE & TIME
                    </p>
                    <p className="font-serif text-h3 text-obsidian">
                      {selectedDate} at {selectedTime}
                    </p>
                  </div>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="font-sans text-caption text-champagne hover:underline"
                  >
                    EDIT
                  </button>
                </div>

                <div>
                  <p className="font-sans text-label uppercase tracking-label text-warm-gray mb-2">
                    WHAT TO EXPECT
                  </p>
                  <ul className="space-y-2 font-sans text-body text-warm-gray">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-champagne mt-1 flex-shrink-0" />
                      Personalized diamond selection guidance
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-champagne mt-1 flex-shrink-0" />
                      Expert advice on cut, color, clarity, and carat
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-champagne mt-1 flex-shrink-0" />
                      Custom design consultation if desired
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-champagne mt-1 flex-shrink-0" />
                      No obligation, expert guidance
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-champagne text-obsidian font-sans text-label uppercase tracking-label hover:bg-soft-gold transition-all duration-400"
            >
              CONFIRM BOOKING
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default Bespoke;
