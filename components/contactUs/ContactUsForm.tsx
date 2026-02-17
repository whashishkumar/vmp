'use client';
import { useState } from 'react';
import { IoPersonOutline, IoCallOutline, IoMailOutline, IoListOutline } from 'react-icons/io5';
import { ContactUsPageEndPoints } from '@/lib/services/ContactUsPageEndPoints';

export default function ContactUsForm() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitStatus('idle');
  };

  const validate = () => {
    const err: any = {};

    if (!form.name) err.name = 'Name required';
    if (!form.email) err.email = 'Email required';
    if (!form.message) err.message = 'Message required';

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      await ContactUsPageEndPoints.submitContactForm({
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject: form.subject,
        message: form.message,
      });
      setSubmitStatus('success');
      setSubmitMessage('Your message has been sent successfully. We will get back to you soon.');
      setForm({ name: '', phone: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      setSubmitStatus('error');
      setSubmitMessage(err?.message || 'Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputBase =
    'w-full rounded-full border border-gray-300 bg-gray-100 px-14 py-4 outline-none focus:border-[#0a3f2a] focus:bg-white transition';

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative">
          <IoPersonOutline className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className={inputBase}
            required
          />
        </div>
        <div className="relative">
          <IoCallOutline className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone number"
            className={inputBase}
          />
        </div>
        <div className="relative">
          <IoMailOutline className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your email"
            className={inputBase}
            required
          />
        </div>
        <div className="relative">
          <IoListOutline className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-xl" />
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className={inputBase}
          />
        </div>
      </div>
      <div className="relative">
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Message"
          rows={5}
          className="w-full rounded-3xl border border-gray-300 bg-gray-100 px-6 py-5 outline-none focus:border-[#0a3f2a] focus:bg-white transition"
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>
      {submitStatus === 'success' && (
        <p className="text-green-600 text-sm font-medium">{submitMessage}</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-sm font-medium">{submitMessage}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-full bg-[#0a3f2a]/90 text-white py-5 text-lg font-semibold hover:opacity-90 transition disabled:opacity-60"
      >
        {loading ? 'Sending...' : 'Send message'}
      </button>
    </form>
  );
}
