import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Breadcrumb from "../../../../components/uiComponents/BreadCrumb";

/* ---------- Reusable Row ---------- */
const FormRow = ({ label, children }) => (
  <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] gap-2 md:gap-4 items-center">
    <label className="text-sm font-medium">{label} :</label>
    {children}
  </div>
);

/* ---------- Section Wrapper ---------- */
const Section = ({ title, children }) => (
  <>
    <div className="bg-gray-300 rounded px-4 py-2 font-medium text-sm">
      {title}
    </div>
    <div className="max-w-3xl mx-auto space-y-4 px-2">
      {children}
    </div>
  </>
);

function CreateUser() {
  const navigate = useNavigate();
  const { handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log("User Created:", data);
  };

  return (
    <div className="min-h-screen p-2 md:p-4">

      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Homepage", onClick: () => navigate("/service/user_manage") },
          { label: "Service" },
          { label: "Users Management", onClick: () => navigate("/service/user_manage") },
          { label: "Create User" },
        ]}
      />

      {/* Main Box */}
      <div className="bg-white shadow-md rounded border px-4 py-3">
        {/* Title + Create User */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-700">
            Email Templates
          </h2>
        </div>
        <div className="bg-gray-100 border rounded p-3 sm:p-0 mb-4">

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 text-sm">

            {/* Account */}
            <Section title="Account">
              <FormRow label="Login">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="Password">
                <input
                  type="password"
                  className="border rounded px-3 py-2 w-full bg-white"
                />
              </FormRow>

              <FormRow label="Email">
                <input
                  type="email"
                  className="border rounded px-3 py-2 w-full bg-white"
                />
              </FormRow>
            </Section>

            {/* Personal Data */}
            <Section title="Personal Data">
              <FormRow label="Surname">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="Name">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="Patronymic">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="Passport">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="Gender">
                <select className="border rounded px-3 py-2 w-full bg-white">
                  <option>Not Indicated</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </FormRow>
            </Section>

            {/* Contacts */}
            <Section title="Contacts">
              <FormRow label="Phone">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="Country">
                <select className="border rounded px-3 py-2 w-full bg-white">
                  <option>India</option>
                  <option>Russia</option>
                  <option>Japan</option>
                </select>
              </FormRow>

              <FormRow label="Region">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="City">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="Address">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>

              <FormRow label="Postcode">
                <input className="border rounded px-3 py-2 w-full bg-white" />
              </FormRow>
            </Section>

            {/* Access */}
            <Section title="Access">
              <FormRow label="Status">
                <select className="border rounded px-3 py-2 w-full bg-white">
                  <option>Active</option>
                </select>
              </FormRow>

              <FormRow label="User Type">
                <select className="border rounded px-3 py-2 w-full bg-white">
                  <option>Trader</option>
                  <option>Admin</option>
                  <option>Staff</option>
                </select>
              </FormRow>
            </Section>

            {/* Actions */}
            <div className="flex flex-col pb-5 sm:flex-row justify-center gap-4 pt-6">
              <button
                type="submit"
                className="px-8 py-2 rounded border bg-gray-200 hover:bg-gray-300"
              >
                Create
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;
