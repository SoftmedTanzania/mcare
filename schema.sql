-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 29, 2018 at 09:24 PM
-- Server version: 5.6.41-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `zebakico_softmed`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointments`
--

CREATE TABLE `appointments` (
  `AppointmentId` int(11) NOT NULL,
  `AppointmentTypeCategoryId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `SlotId` int(11) NOT NULL,
  `EncounterId` int(11) NOT NULL,
  `ConfirmationStatus` int(11) NOT NULL,
  `AttendanceStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `appointment_types`
--

CREATE TABLE `appointment_types` (
  `AppointmentTypeId` int(11) NOT NULL,
  `AppointmentTypeDescription` varchar(900) NOT NULL,
  `AppointmentTypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `appointment_type_category`
--

CREATE TABLE `appointment_type_category` (
  `AppointmentTypeCategoryId` int(11) NOT NULL,
  `AppointmentTypeId` int(11) NOT NULL,
  `AppointmentTypeCategoryDescription` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `beds`
--

CREATE TABLE `beds` (
  `BedId` int(11) NOT NULL,
  `BedTypeId` int(11) NOT NULL,
  `BedGroupId` int(11) NOT NULL,
  `BedReferenceNo` varchar(900) NOT NULL,
  `OccupancyStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bed_allocation`
--

CREATE TABLE `bed_allocation` (
  `BedAllocationId` int(11) NOT NULL,
  `PatientRevisitId` int(11) NOT NULL,
  `BedId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `AllocationDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bed_group`
--

CREATE TABLE `bed_group` (
  `BedGroupId` int(11) NOT NULL,
  `BedGroupDescription` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `bed_type`
--

CREATE TABLE `bed_type` (
  `BedTypeId` int(11) NOT NULL,
  `BedTypeDescription` varchar(900) NOT NULL,
  `PricePerNight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `claims`
--

CREATE TABLE `claims` (
  `ClaimId` int(11) NOT NULL,
  `PerformedProcedureId` int(11) DEFAULT NULL,
  `MedicationRequestId` int(11) DEFAULT NULL,
  `BedAllocationId` int(11) DEFAULT NULL,
  `TestOrderId` int(11) DEFAULT NULL,
  `RadiologyOrderId` int(11) DEFAULT NULL,
  `PatientRevisitId` int(11) DEFAULT NULL,
  `ClaimAmount` int(11) NOT NULL,
  `ClaimDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `DepartmentId` int(11) NOT NULL,
  `DepartmentTypeCategoryId` int(11) NOT NULL,
  `DepartmentDescription` varchar(900) NOT NULL,
  `DepartmentReferenceNo` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `department_types`
--

CREATE TABLE `department_types` (
  `DepartmentTypeId` int(11) NOT NULL,
  `TypeName` varchar(900) NOT NULL,
  `TypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COMMENT='Configuration for types of departments';

-- --------------------------------------------------------

--
-- Table structure for table `department_type_categories`
--

CREATE TABLE `department_type_categories` (
  `DepartmentTypeCategoryId` int(11) NOT NULL,
  `DepartmentTypeId` int(11) NOT NULL,
  `TypeCategoryName` varchar(900) NOT NULL,
  `TypeCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `diagnosis`
--

CREATE TABLE `diagnosis` (
  `DiagnosisId` int(11) NOT NULL,
  `PatientRevisitId` int(11) NOT NULL,
  `DiagnosisDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `diagnosis_records`
--

CREATE TABLE `diagnosis_records` (
  `DiagnosisRecordId` int(11) NOT NULL,
  `DiagnosisRecordTypeCategoryId` int(11) NOT NULL,
  `DiagnosisId` int(11) NOT NULL,
  `DiagnosisDescription` varchar(5000) NOT NULL,
  `RecordedBy` int(11) NOT NULL,
  `RecordedDate` datetime NOT NULL,
  `IcdCode` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `diagnosis_record_types`
--

CREATE TABLE `diagnosis_record_types` (
  `DiagnosisRecordTypeId` int(11) NOT NULL,
  `DiagnosisRecordTypeDescription` varchar(900) NOT NULL,
  `DiagnosisRecordTypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `diagnosis_record_type_categories`
--

CREATE TABLE `diagnosis_record_type_categories` (
  `DiagnosisRecordTypeCategoryId` int(11) NOT NULL,
  `DiagnosisRecordTypeId` int(11) NOT NULL,
  `DiagnosisRecordTypeDescription` varchar(900) NOT NULL,
  `DiagnosisRecordTypeCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `drug_configurations`
--

CREATE TABLE `drug_configurations` (
  `DrugConfigurationId` int(11) NOT NULL,
  `GenericDrugCategoryId` int(11) NOT NULL,
  `TradeName` varchar(1000) NOT NULL,
  `PricePerMilligram` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `encounters`
--

CREATE TABLE `encounters` (
  `EncounterId` int(11) NOT NULL,
  `PatientRevisitId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `EncounterDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `expected_appointment_activities`
--

CREATE TABLE `expected_appointment_activities` (
  `ExpectedAppointmentActivityId` int(11) NOT NULL,
  `ExpectedAppointmentActivityCategoryId` int(11) NOT NULL,
  `ActivityDescription` varchar(900) NOT NULL,
  `AppointmentId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `expected_appointment_activity_categories`
--

CREATE TABLE `expected_appointment_activity_categories` (
  `ExpectedAppointmentActivityCategoryId` int(11) NOT NULL,
  `ExpectedActivityCategoryDescription` varchar(900) NOT NULL,
  `ExpectedActivityCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `generic_drug_categories`
--

CREATE TABLE `generic_drug_categories` (
  `GenericDrugCategoryId` int(11) NOT NULL,
  `GenericDrugCategoryDescription` varchar(900) NOT NULL,
  `GenericDrugCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `labs`
--

CREATE TABLE `labs` (
  `LabId` int(11) NOT NULL,
  `LabCategoryId` int(11) NOT NULL,
  `LabDescription` int(11) NOT NULL,
  `LabReferenceNo` varchar(900) NOT NULL,
  `FacilityId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lab_categories`
--

CREATE TABLE `lab_categories` (
  `LabCategoryId` int(11) NOT NULL,
  `LabCategoryDescription` varchar(900) NOT NULL,
  `LabCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `medication_administration`
--

CREATE TABLE `medication_administration` (
  `MedicationAdministrationId` int(11) NOT NULL,
  `MedicationRequestDetailId` int(11) NOT NULL,
  `AdministrationStatus` int(11) NOT NULL,
  `AdministrationComment` varchar(9000) NOT NULL,
  `AdministrationDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `medication_request`
--

CREATE TABLE `medication_request` (
  `MedicationRequestId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `PatientRevisitId` int(11) NOT NULL,
  `DiagnosisId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `medication_request_details`
--

CREATE TABLE `medication_request_details` (
  `MedicationRequestDetailId` int(11) NOT NULL,
  `MedicationRequestId` int(11) NOT NULL,
  `DrugConfigurationId` int(11) NOT NULL,
  `DrugQuantity` int(11) NOT NULL,
  `DrugRequestStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `medication_statement`
--

CREATE TABLE `medication_statement` (
  `MedicationStatementId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `MedicationStatementDescription` varchar(5000) NOT NULL,
  `DrugConfigurationId` int(11) NOT NULL,
  `AdministrationtDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patients`
--

CREATE TABLE `patients` (
  `PatientId` int(11) NOT NULL,
  `FacilityId` int(11) NOT NULL,
  `Surname` varchar(900) NOT NULL,
  `MiddleName` varchar(900) NOT NULL,
  `LastName` varchar(900) NOT NULL,
  `PatientPhoneNumber` varchar(900) NOT NULL,
  `PatientEmail` varchar(900) NOT NULL,
  `PatientPhysicalAddress` varchar(900) NOT NULL,
  `PatientDateOfBirth` date NOT NULL,
  `PatientReferenceNo` varchar(900) NOT NULL,
  `ParentId` int(11) DEFAULT NULL,
  `Deceased` int(11) NOT NULL,
  `PatientPicUrl` varchar(900) NOT NULL,
  `ActualImage` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_checkups`
--

CREATE TABLE `patient_checkups` (
  `PatientCheckUpId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `PatientRevisitId` int(11) NOT NULL,
  `PatientCheckUpDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_condition`
--

CREATE TABLE `patient_condition` (
  `PatientConditionId` int(11) NOT NULL,
  `PatientCheckUpId` int(11) NOT NULL,
  `Comment` varchar(9000) NOT NULL,
  `RecordedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_custodian`
--

CREATE TABLE `patient_custodian` (
  `PatientCustodianId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `Surname` varchar(900) NOT NULL,
  `MiddleName` varchar(900) NOT NULL,
  `LastName` varchar(900) NOT NULL,
  `PhoneNumber` varchar(900) NOT NULL,
  `Email` varchar(900) NOT NULL,
  `PhysicalAddress` varchar(900) NOT NULL,
  `DateOfBirth` datetime NOT NULL,
  `Relationship` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_general_records`
--

CREATE TABLE `patient_general_records` (
  `PatientGeneralRecordId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `PatientGeneralRecordTypeCategoryId` int(11) NOT NULL,
  `RecordValue` varchar(9000) NOT NULL,
  `RecordedDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_general_record_types`
--

CREATE TABLE `patient_general_record_types` (
  `PatientGeneralRecordTypeId` int(11) NOT NULL,
  `PatientGeneralRecordTypeDescription` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_general_record_type_categories`
--

CREATE TABLE `patient_general_record_type_categories` (
  `PatientGeneralRecordTypeCategoryId` int(11) NOT NULL,
  `PatientGeneralRecordTypeId` int(11) NOT NULL,
  `PatientGeneralRecordTypeCategoryDescription` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_individual_qualities`
--

CREATE TABLE `patient_individual_qualities` (
  `PatientIndividualQualityId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `PatientIndividualQualityValue` varchar(900) NOT NULL,
  `PatientTypeCategoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_revisits`
--

CREATE TABLE `patient_revisits` (
  `PatientRevisitId` int(11) NOT NULL,
  `PatientVisitId` int(11) NOT NULL,
  `PatientRevisitDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_sponsors`
--

CREATE TABLE `patient_sponsors` (
  `PatientSponsorId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `SponsorId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_types`
--

CREATE TABLE `patient_types` (
  `PatientTypeId` int(11) NOT NULL,
  `PatientTypeDescription` varchar(900) NOT NULL,
  `PatientTypeCode` varchar(900) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_type_categories`
--

CREATE TABLE `patient_type_categories` (
  `PatientTypeCategoryId` int(11) NOT NULL,
  `PatientTypeId` int(11) NOT NULL,
  `PatientTypeCategoryDescription` varchar(900) NOT NULL,
  `PatientTypeCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `patient_visits`
--

CREATE TABLE `patient_visits` (
  `PatientVisitId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `FacilityId` int(11) NOT NULL,
  `PatientVisitDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `performed_procedures`
--

CREATE TABLE `performed_procedures` (
  `PerformedProcedureId` int(11) NOT NULL,
  `EncounterId` int(11) NOT NULL,
  `ProcedureId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `performed_procedure_records`
--

CREATE TABLE `performed_procedure_records` (
  `PerformedProcedureRecordId` int(11) NOT NULL,
  `PerformedProcedureId` int(11) NOT NULL,
  `PerformedProcedureRecordTypeCategoryId` int(11) NOT NULL,
  `PerformedProcedureRecordValue` varchar(900) NOT NULL,
  `DateRecorded` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `performed_procedure_record_types`
--

CREATE TABLE `performed_procedure_record_types` (
  `PerformedProcedureRecordTypeId` int(11) NOT NULL,
  `PerformedProcedureRecordTypeDescription` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `performed_procedure_record_type_category`
--

CREATE TABLE `performed_procedure_record_type_category` (
  `PerformedProcedureRecordTypeCategoryId` int(11) NOT NULL,
  `PerformedProcedureRecordTypeId` int(11) NOT NULL,
  `PerformedProcedureRecordTypeCategoryDescription` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `procedures`
--

CREATE TABLE `procedures` (
  `ProcedureId` int(11) NOT NULL,
  `ProcedureTypeCategoryId` int(11) NOT NULL,
  `ProcedureDescription` varchar(900) NOT NULL,
  `Price` int(11) NOT NULL,
  `RoleTypeCategoryId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `procedure_types`
--

CREATE TABLE `procedure_types` (
  `ProcedureTypeId` int(11) NOT NULL,
  `ProcedureTypeDescription` varchar(900) NOT NULL,
  `ProcedureTypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `procedure_type_categories`
--

CREATE TABLE `procedure_type_categories` (
  `ProcedureTypeCategoryId` int(11) NOT NULL,
  `ProcedureTypeId` int(11) NOT NULL,
  `ProcedureTypeCategoryDescription` varchar(900) NOT NULL,
  `ProcedureTypeCategoryCode` varchar(900) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `radiology`
--

CREATE TABLE `radiology` (
  `RadiologyId` int(11) NOT NULL,
  `FacilityId` int(11) NOT NULL,
  `RadiologyName` varchar(900) NOT NULL,
  `RadiologyReferenceNo` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `radiology_orders`
--

CREATE TABLE `radiology_orders` (
  `RadiologyOrderId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `EncounterId` int(11) NOT NULL,
  `RadiologyOrderDate` datetime NOT NULL,
  `RadiologyOrderTypeId` int(11) NOT NULL,
  `RadiologyId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `radiology_order_results`
--

CREATE TABLE `radiology_order_results` (
  `RadiologyResultOrderId` int(11) NOT NULL,
  `RadiologyOrderResultCategoryId` int(11) NOT NULL,
  `RadiologyOrderId` int(11) NOT NULL,
  `RadiologyOrderResultValue` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `radiology_order_result_categories`
--

CREATE TABLE `radiology_order_result_categories` (
  `RadiologyOrderResultCategoryId` int(11) NOT NULL,
  `RadiologyOrderResultCategoryDescription` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `radiology_order_types`
--

CREATE TABLE `radiology_order_types` (
  `RadiologyOrderTypeId` int(11) NOT NULL,
  `RadiologyOrderTypeDescription` varchar(5000) NOT NULL,
  `RadiologyOrderTypeCode` varchar(900) NOT NULL,
  `Price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `RoleId` int(11) NOT NULL,
  `RoleTypeCategoryId` int(11) NOT NULL,
  `RoleDescription` varchar(900) NOT NULL,
  `UserId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role_types`
--

CREATE TABLE `role_types` (
  `RoleTypeId` int(11) NOT NULL,
  `RoleTypeDescription` varchar(900) NOT NULL,
  `RoleTypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `role_type_categories`
--

CREATE TABLE `role_type_categories` (
  `RoleTypeCategoryId` int(11) NOT NULL,
  `RoleTypeId` int(11) NOT NULL,
  `RoleTypeCategoryDescription` varchar(900) NOT NULL,
  `RoleTypeCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `schedules`
--

CREATE TABLE `schedules` (
  `ScheduleId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `SlotId` int(11) NOT NULL,
  `ScheduleStartDate` datetime NOT NULL,
  `ScheduleEndDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `slots`
--

CREATE TABLE `slots` (
  `SlotId` int(11) NOT NULL,
  `SlotTypeCategoryId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `SlotStartDate` datetime NOT NULL,
  `SlotEndDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `slot_types`
--

CREATE TABLE `slot_types` (
  `SlotTypeId` int(11) NOT NULL,
  `SlotTypeDescription` varchar(900) NOT NULL,
  `SlotTypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `slot_type_category`
--

CREATE TABLE `slot_type_category` (
  `SlotTypeCategoryId` int(11) NOT NULL,
  `SlotTypeId` int(11) NOT NULL,
  `SlotTypeCategoryDescription` varchar(900) NOT NULL,
  `SlotTypeCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `specimen`
--

CREATE TABLE `specimen` (
  `SpecimenId` int(11) NOT NULL,
  `SpecimenTypeId` int(11) NOT NULL,
  `SpecimenDescription` varchar(5000) NOT NULL,
  `QualificationStatus` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `EncounterId` int(11) NOT NULL,
  `PaymentStatus` int(11) NOT NULL,
  `ArrivalStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `specimen_records`
--

CREATE TABLE `specimen_records` (
  `SpecimenRecordId` int(11) NOT NULL,
  `SpecimenRecordCategoryId` int(11) NOT NULL,
  `SpecimenId` int(11) NOT NULL,
  `SpecimenRecordValue` int(11) NOT NULL,
  `SpecimenRecordDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `specimen_record_categories`
--

CREATE TABLE `specimen_record_categories` (
  `SpecimenRecordCategoryId` int(11) NOT NULL,
  `SpecimenRecordCategoryDescription` varchar(5000) NOT NULL,
  `SpecimenRecordCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `specimen_types`
--

CREATE TABLE `specimen_types` (
  `SpecimenTypeId` int(11) NOT NULL,
  `SpecimenTypeDescription` varchar(900) NOT NULL,
  `SpecimenTypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sponsors`
--

CREATE TABLE `sponsors` (
  `SponsorId` int(11) NOT NULL,
  `SponsorTypeId` int(11) NOT NULL,
  `SponsorName` varchar(1000) NOT NULL,
  `SponsorCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `sponsor_types`
--

CREATE TABLE `sponsor_types` (
  `SponsorTypeId` int(11) NOT NULL,
  `SponsorTypeDescription` varchar(1000) NOT NULL,
  `SponsorTypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `test_orders`
--

CREATE TABLE `test_orders` (
  `TestOrderId` int(11) NOT NULL,
  `TestOrderTypeCategoryId` int(11) NOT NULL,
  `UserId` int(11) NOT NULL,
  `PatientId` int(11) NOT NULL,
  `EncounterId` int(11) NOT NULL,
  `SpecimenId` int(11) DEFAULT NULL,
  `LabId` int(11) NOT NULL,
  `TestOrderDate` datetime NOT NULL,
  `TestOrderStatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `test_order_types`
--

CREATE TABLE `test_order_types` (
  `TestOrderTypeId` int(11) NOT NULL,
  `TestTypeDescription` varchar(1000) NOT NULL,
  `TestOrderTypeCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `test_order_type_category`
--

CREATE TABLE `test_order_type_category` (
  `TestOrderTypeCategoryId` int(11) NOT NULL,
  `TestOrderTypeId` int(11) NOT NULL,
  `TestOrderTypeCategoryDescription` varchar(1000) NOT NULL,
  `TestOrderTypeCategoryCode` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `UserId` int(11) NOT NULL,
  `DepartmentId` int(11) NOT NULL,
  `Surname` varchar(900) NOT NULL,
  `MiddleName` varchar(900) NOT NULL,
  `LastName` varchar(900) NOT NULL,
  `PhoneNumber` varchar(900) NOT NULL,
  `Email` varchar(900) NOT NULL,
  `Password` varchar(900) NOT NULL,
  `ProfPicUrl` varchar(900) NOT NULL,
  `PhysicalAddress` varchar(900) NOT NULL,
  `NationalId` varchar(900) NOT NULL,
  `JobReferenceNo` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `wards`
--

CREATE TABLE `wards` (
  `WardId` int(11) NOT NULL,
  `WardTypeCategoryId` int(11) NOT NULL,
  `WardName` varchar(900) NOT NULL,
  `FacilityId` int(11) NOT NULL,
  `WardReferenceNo` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ward_types`
--

CREATE TABLE `ward_types` (
  `WardTypeId` int(11) NOT NULL,
  `WardTypeDescription` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `ward_type_category`
--

CREATE TABLE `ward_type_category` (
  `WardTypeCategoryId` int(11) NOT NULL,
  `WardTypeId` int(11) NOT NULL,
  `WardTypeCategoryDescription` varchar(900) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointments`
--
ALTER TABLE `appointments`
  ADD PRIMARY KEY (`AppointmentId`),
  ADD KEY `AppointmentTypeCategoryId` (`AppointmentTypeCategoryId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `EncounterId` (`EncounterId`),
  ADD KEY `SlotId` (`SlotId`);

--
-- Indexes for table `appointment_types`
--
ALTER TABLE `appointment_types`
  ADD PRIMARY KEY (`AppointmentTypeId`);

--
-- Indexes for table `appointment_type_category`
--
ALTER TABLE `appointment_type_category`
  ADD PRIMARY KEY (`AppointmentTypeCategoryId`),
  ADD KEY `AppointmentTypeId` (`AppointmentTypeId`);

--
-- Indexes for table `beds`
--
ALTER TABLE `beds`
  ADD PRIMARY KEY (`BedId`),
  ADD KEY `BedTypeId` (`BedTypeId`),
  ADD KEY `BedGroupId` (`BedGroupId`);

--
-- Indexes for table `bed_allocation`
--
ALTER TABLE `bed_allocation`
  ADD PRIMARY KEY (`BedAllocationId`),
  ADD KEY `PatientRevisitId` (`PatientRevisitId`),
  ADD KEY `BedId` (`BedId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `bed_group`
--
ALTER TABLE `bed_group`
  ADD PRIMARY KEY (`BedGroupId`);

--
-- Indexes for table `bed_type`
--
ALTER TABLE `bed_type`
  ADD PRIMARY KEY (`BedTypeId`);

--
-- Indexes for table `claims`
--
ALTER TABLE `claims`
  ADD PRIMARY KEY (`ClaimId`),
  ADD KEY `PerformedProcedureId` (`PerformedProcedureId`),
  ADD KEY `MedicationRequestId` (`MedicationRequestId`),
  ADD KEY `BedAllocationId` (`BedAllocationId`),
  ADD KEY `TestOrderId` (`TestOrderId`),
  ADD KEY `RadiologyOrderId` (`RadiologyOrderId`),
  ADD KEY `PatientRevisitId` (`PatientRevisitId`);

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`DepartmentId`),
  ADD KEY `DepartmentTypeCategoryId` (`DepartmentTypeCategoryId`);

--
-- Indexes for table `department_types`
--
ALTER TABLE `department_types`
  ADD PRIMARY KEY (`DepartmentTypeId`);

--
-- Indexes for table `department_type_categories`
--
ALTER TABLE `department_type_categories`
  ADD PRIMARY KEY (`DepartmentTypeCategoryId`),
  ADD KEY `DepartmentTypeId` (`DepartmentTypeId`);

--
-- Indexes for table `diagnosis`
--
ALTER TABLE `diagnosis`
  ADD PRIMARY KEY (`DiagnosisId`),
  ADD KEY `PatientRevisitId` (`PatientRevisitId`);

--
-- Indexes for table `diagnosis_records`
--
ALTER TABLE `diagnosis_records`
  ADD PRIMARY KEY (`DiagnosisRecordId`),
  ADD KEY `DiagnosisRecordTypeCategoryId` (`DiagnosisRecordTypeCategoryId`),
  ADD KEY `DiagnosisId` (`DiagnosisId`);

--
-- Indexes for table `diagnosis_record_types`
--
ALTER TABLE `diagnosis_record_types`
  ADD PRIMARY KEY (`DiagnosisRecordTypeId`);

--
-- Indexes for table `diagnosis_record_type_categories`
--
ALTER TABLE `diagnosis_record_type_categories`
  ADD PRIMARY KEY (`DiagnosisRecordTypeCategoryId`),
  ADD KEY `DiagnosisRecordTypeId` (`DiagnosisRecordTypeId`);

--
-- Indexes for table `drug_configurations`
--
ALTER TABLE `drug_configurations`
  ADD PRIMARY KEY (`DrugConfigurationId`),
  ADD KEY `GenericDrugCategoryId` (`GenericDrugCategoryId`);

--
-- Indexes for table `encounters`
--
ALTER TABLE `encounters`
  ADD PRIMARY KEY (`EncounterId`),
  ADD KEY `PatientRevisitId` (`PatientRevisitId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `expected_appointment_activities`
--
ALTER TABLE `expected_appointment_activities`
  ADD PRIMARY KEY (`ExpectedAppointmentActivityId`),
  ADD KEY `ExpectedAppointmentActivityCategoryId` (`ExpectedAppointmentActivityCategoryId`),
  ADD KEY `AppointmentId` (`AppointmentId`);

--
-- Indexes for table `expected_appointment_activity_categories`
--
ALTER TABLE `expected_appointment_activity_categories`
  ADD PRIMARY KEY (`ExpectedAppointmentActivityCategoryId`);

--
-- Indexes for table `generic_drug_categories`
--
ALTER TABLE `generic_drug_categories`
  ADD PRIMARY KEY (`GenericDrugCategoryId`);

--
-- Indexes for table `labs`
--
ALTER TABLE `labs`
  ADD PRIMARY KEY (`LabId`),
  ADD KEY `LabCategoryId` (`LabCategoryId`);

--
-- Indexes for table `lab_categories`
--
ALTER TABLE `lab_categories`
  ADD PRIMARY KEY (`LabCategoryId`);

--
-- Indexes for table `medication_administration`
--
ALTER TABLE `medication_administration`
  ADD PRIMARY KEY (`MedicationAdministrationId`),
  ADD KEY `MedicationRequestDetailId` (`MedicationRequestDetailId`);

--
-- Indexes for table `medication_request`
--
ALTER TABLE `medication_request`
  ADD PRIMARY KEY (`MedicationRequestId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `DiagnosisId` (`DiagnosisId`),
  ADD KEY `PatientRevisitId` (`PatientRevisitId`);

--
-- Indexes for table `medication_request_details`
--
ALTER TABLE `medication_request_details`
  ADD PRIMARY KEY (`MedicationRequestDetailId`),
  ADD KEY `MedicationRequestId` (`MedicationRequestId`),
  ADD KEY `DrugConfigurationId` (`DrugConfigurationId`);

--
-- Indexes for table `medication_statement`
--
ALTER TABLE `medication_statement`
  ADD PRIMARY KEY (`MedicationStatementId`),
  ADD KEY `PatientId` (`PatientId`);

--
-- Indexes for table `patients`
--
ALTER TABLE `patients`
  ADD PRIMARY KEY (`PatientId`);

--
-- Indexes for table `patient_checkups`
--
ALTER TABLE `patient_checkups`
  ADD PRIMARY KEY (`PatientCheckUpId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `PatientRevisitId` (`PatientRevisitId`);

--
-- Indexes for table `patient_condition`
--
ALTER TABLE `patient_condition`
  ADD PRIMARY KEY (`PatientConditionId`),
  ADD KEY `PatientCheckUpId` (`PatientCheckUpId`);

--
-- Indexes for table `patient_custodian`
--
ALTER TABLE `patient_custodian`
  ADD PRIMARY KEY (`PatientCustodianId`),
  ADD KEY `PatientId` (`PatientId`);

--
-- Indexes for table `patient_general_records`
--
ALTER TABLE `patient_general_records`
  ADD PRIMARY KEY (`PatientGeneralRecordId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `PatientGeneralRecordTypeCategoryId` (`PatientGeneralRecordTypeCategoryId`);

--
-- Indexes for table `patient_general_record_types`
--
ALTER TABLE `patient_general_record_types`
  ADD PRIMARY KEY (`PatientGeneralRecordTypeId`);

--
-- Indexes for table `patient_general_record_type_categories`
--
ALTER TABLE `patient_general_record_type_categories`
  ADD PRIMARY KEY (`PatientGeneralRecordTypeCategoryId`),
  ADD KEY `PatientGeneralRecordTypeId` (`PatientGeneralRecordTypeId`);

--
-- Indexes for table `patient_individual_qualities`
--
ALTER TABLE `patient_individual_qualities`
  ADD PRIMARY KEY (`PatientIndividualQualityId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `PatientTypeCategoryId` (`PatientTypeCategoryId`);

--
-- Indexes for table `patient_revisits`
--
ALTER TABLE `patient_revisits`
  ADD PRIMARY KEY (`PatientRevisitId`),
  ADD KEY `PatientVisitId` (`PatientVisitId`);

--
-- Indexes for table `patient_sponsors`
--
ALTER TABLE `patient_sponsors`
  ADD PRIMARY KEY (`PatientSponsorId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `SponsorId` (`SponsorId`);

--
-- Indexes for table `patient_types`
--
ALTER TABLE `patient_types`
  ADD PRIMARY KEY (`PatientTypeId`);

--
-- Indexes for table `patient_type_categories`
--
ALTER TABLE `patient_type_categories`
  ADD PRIMARY KEY (`PatientTypeCategoryId`),
  ADD KEY `PatientTypeId` (`PatientTypeId`);

--
-- Indexes for table `patient_visits`
--
ALTER TABLE `patient_visits`
  ADD PRIMARY KEY (`PatientVisitId`),
  ADD KEY `PatientId` (`PatientId`);

--
-- Indexes for table `performed_procedures`
--
ALTER TABLE `performed_procedures`
  ADD PRIMARY KEY (`PerformedProcedureId`),
  ADD KEY `ProcedureId` (`ProcedureId`),
  ADD KEY `EncounterId` (`EncounterId`);

--
-- Indexes for table `performed_procedure_records`
--
ALTER TABLE `performed_procedure_records`
  ADD PRIMARY KEY (`PerformedProcedureRecordId`),
  ADD KEY `PerformedProcedureId` (`PerformedProcedureId`),
  ADD KEY `PerformedProcedureRecordTypeCategoryId` (`PerformedProcedureRecordTypeCategoryId`);

--
-- Indexes for table `performed_procedure_record_types`
--
ALTER TABLE `performed_procedure_record_types`
  ADD PRIMARY KEY (`PerformedProcedureRecordTypeId`);

--
-- Indexes for table `performed_procedure_record_type_category`
--
ALTER TABLE `performed_procedure_record_type_category`
  ADD PRIMARY KEY (`PerformedProcedureRecordTypeCategoryId`),
  ADD KEY `PerformedProcedureRecordTypeId` (`PerformedProcedureRecordTypeId`);

--
-- Indexes for table `procedures`
--
ALTER TABLE `procedures`
  ADD PRIMARY KEY (`ProcedureId`),
  ADD KEY `ProcedureTypeCategoryId` (`ProcedureTypeCategoryId`);

--
-- Indexes for table `procedure_types`
--
ALTER TABLE `procedure_types`
  ADD PRIMARY KEY (`ProcedureTypeId`);

--
-- Indexes for table `procedure_type_categories`
--
ALTER TABLE `procedure_type_categories`
  ADD PRIMARY KEY (`ProcedureTypeCategoryId`),
  ADD KEY `ProcedureTypeId` (`ProcedureTypeId`);

--
-- Indexes for table `radiology`
--
ALTER TABLE `radiology`
  ADD PRIMARY KEY (`RadiologyId`);

--
-- Indexes for table `radiology_orders`
--
ALTER TABLE `radiology_orders`
  ADD PRIMARY KEY (`RadiologyOrderId`),
  ADD KEY `RadiologyOrderTypeId` (`RadiologyOrderTypeId`),
  ADD KEY `UserId` (`UserId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `EncounterId` (`EncounterId`);

--
-- Indexes for table `radiology_order_results`
--
ALTER TABLE `radiology_order_results`
  ADD PRIMARY KEY (`RadiologyResultOrderId`),
  ADD KEY `RadiologyOrderResultCategoryId` (`RadiologyOrderResultCategoryId`),
  ADD KEY `RadiologyOrderId` (`RadiologyOrderId`);

--
-- Indexes for table `radiology_order_result_categories`
--
ALTER TABLE `radiology_order_result_categories`
  ADD PRIMARY KEY (`RadiologyOrderResultCategoryId`);

--
-- Indexes for table `radiology_order_types`
--
ALTER TABLE `radiology_order_types`
  ADD PRIMARY KEY (`RadiologyOrderTypeId`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`RoleId`),
  ADD KEY `RoleTypeCategoryId` (`RoleTypeCategoryId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `role_types`
--
ALTER TABLE `role_types`
  ADD PRIMARY KEY (`RoleTypeId`);

--
-- Indexes for table `role_type_categories`
--
ALTER TABLE `role_type_categories`
  ADD PRIMARY KEY (`RoleTypeCategoryId`),
  ADD KEY `RoleTypeId` (`RoleTypeId`);

--
-- Indexes for table `schedules`
--
ALTER TABLE `schedules`
  ADD PRIMARY KEY (`ScheduleId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `SlotId` (`SlotId`);

--
-- Indexes for table `slots`
--
ALTER TABLE `slots`
  ADD PRIMARY KEY (`SlotId`),
  ADD KEY `SlotTypeCategoryId` (`SlotTypeCategoryId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `slot_types`
--
ALTER TABLE `slot_types`
  ADD PRIMARY KEY (`SlotTypeId`);

--
-- Indexes for table `slot_type_category`
--
ALTER TABLE `slot_type_category`
  ADD PRIMARY KEY (`SlotTypeCategoryId`),
  ADD KEY `SlotTypeId` (`SlotTypeId`);

--
-- Indexes for table `specimen`
--
ALTER TABLE `specimen`
  ADD PRIMARY KEY (`SpecimenId`),
  ADD KEY `SpecimenTypeId` (`SpecimenTypeId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `EncounterId` (`EncounterId`);

--
-- Indexes for table `specimen_records`
--
ALTER TABLE `specimen_records`
  ADD PRIMARY KEY (`SpecimenRecordId`),
  ADD KEY `SpecimenRecordCategoryId` (`SpecimenRecordCategoryId`),
  ADD KEY `SpecimenId` (`SpecimenId`);

--
-- Indexes for table `specimen_record_categories`
--
ALTER TABLE `specimen_record_categories`
  ADD PRIMARY KEY (`SpecimenRecordCategoryId`);

--
-- Indexes for table `specimen_types`
--
ALTER TABLE `specimen_types`
  ADD PRIMARY KEY (`SpecimenTypeId`);

--
-- Indexes for table `sponsors`
--
ALTER TABLE `sponsors`
  ADD PRIMARY KEY (`SponsorId`),
  ADD KEY `SponsorTypeId` (`SponsorTypeId`);

--
-- Indexes for table `sponsor_types`
--
ALTER TABLE `sponsor_types`
  ADD PRIMARY KEY (`SponsorTypeId`);

--
-- Indexes for table `test_orders`
--
ALTER TABLE `test_orders`
  ADD PRIMARY KEY (`TestOrderId`),
  ADD KEY `TestOrderTypeCategoryId` (`TestOrderTypeCategoryId`),
  ADD KEY `PatientId` (`PatientId`),
  ADD KEY `EncounterId` (`EncounterId`),
  ADD KEY `LabId` (`LabId`),
  ADD KEY `SpecimenId` (`SpecimenId`),
  ADD KEY `UserId` (`UserId`);

--
-- Indexes for table `test_order_types`
--
ALTER TABLE `test_order_types`
  ADD PRIMARY KEY (`TestOrderTypeId`);

--
-- Indexes for table `test_order_type_category`
--
ALTER TABLE `test_order_type_category`
  ADD PRIMARY KEY (`TestOrderTypeCategoryId`),
  ADD KEY `TestOrderTypeId` (`TestOrderTypeId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`UserId`),
  ADD KEY `DepartmentId` (`DepartmentId`);

--
-- Indexes for table `wards`
--
ALTER TABLE `wards`
  ADD PRIMARY KEY (`WardId`),
  ADD KEY `WardTypeCategoryId` (`WardTypeCategoryId`);

--
-- Indexes for table `ward_types`
--
ALTER TABLE `ward_types`
  ADD PRIMARY KEY (`WardTypeId`);

--
-- Indexes for table `ward_type_category`
--
ALTER TABLE `ward_type_category`
  ADD PRIMARY KEY (`WardTypeCategoryId`),
  ADD KEY `WardTypeId` (`WardTypeId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointments`
--
ALTER TABLE `appointments`
  MODIFY `AppointmentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment_types`
--
ALTER TABLE `appointment_types`
  MODIFY `AppointmentTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `appointment_type_category`
--
ALTER TABLE `appointment_type_category`
  MODIFY `AppointmentTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `beds`
--
ALTER TABLE `beds`
  MODIFY `BedId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bed_allocation`
--
ALTER TABLE `bed_allocation`
  MODIFY `BedAllocationId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bed_group`
--
ALTER TABLE `bed_group`
  MODIFY `BedGroupId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bed_type`
--
ALTER TABLE `bed_type`
  MODIFY `BedTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `claims`
--
ALTER TABLE `claims`
  MODIFY `ClaimId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `DepartmentId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department_types`
--
ALTER TABLE `department_types`
  MODIFY `DepartmentTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `department_type_categories`
--
ALTER TABLE `department_type_categories`
  MODIFY `DepartmentTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diagnosis`
--
ALTER TABLE `diagnosis`
  MODIFY `DiagnosisId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diagnosis_records`
--
ALTER TABLE `diagnosis_records`
  MODIFY `DiagnosisRecordId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diagnosis_record_types`
--
ALTER TABLE `diagnosis_record_types`
  MODIFY `DiagnosisRecordTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `diagnosis_record_type_categories`
--
ALTER TABLE `diagnosis_record_type_categories`
  MODIFY `DiagnosisRecordTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `drug_configurations`
--
ALTER TABLE `drug_configurations`
  MODIFY `DrugConfigurationId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `encounters`
--
ALTER TABLE `encounters`
  MODIFY `EncounterId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expected_appointment_activities`
--
ALTER TABLE `expected_appointment_activities`
  MODIFY `ExpectedAppointmentActivityId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `expected_appointment_activity_categories`
--
ALTER TABLE `expected_appointment_activity_categories`
  MODIFY `ExpectedAppointmentActivityCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `generic_drug_categories`
--
ALTER TABLE `generic_drug_categories`
  MODIFY `GenericDrugCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `labs`
--
ALTER TABLE `labs`
  MODIFY `LabId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `lab_categories`
--
ALTER TABLE `lab_categories`
  MODIFY `LabCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medication_administration`
--
ALTER TABLE `medication_administration`
  MODIFY `MedicationAdministrationId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medication_request`
--
ALTER TABLE `medication_request`
  MODIFY `MedicationRequestId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medication_request_details`
--
ALTER TABLE `medication_request_details`
  MODIFY `MedicationRequestDetailId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `medication_statement`
--
ALTER TABLE `medication_statement`
  MODIFY `MedicationStatementId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patients`
--
ALTER TABLE `patients`
  MODIFY `PatientId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_checkups`
--
ALTER TABLE `patient_checkups`
  MODIFY `PatientCheckUpId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_condition`
--
ALTER TABLE `patient_condition`
  MODIFY `PatientConditionId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_custodian`
--
ALTER TABLE `patient_custodian`
  MODIFY `PatientCustodianId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_general_records`
--
ALTER TABLE `patient_general_records`
  MODIFY `PatientGeneralRecordId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_general_record_types`
--
ALTER TABLE `patient_general_record_types`
  MODIFY `PatientGeneralRecordTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_general_record_type_categories`
--
ALTER TABLE `patient_general_record_type_categories`
  MODIFY `PatientGeneralRecordTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_individual_qualities`
--
ALTER TABLE `patient_individual_qualities`
  MODIFY `PatientIndividualQualityId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_revisits`
--
ALTER TABLE `patient_revisits`
  MODIFY `PatientRevisitId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_sponsors`
--
ALTER TABLE `patient_sponsors`
  MODIFY `PatientSponsorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_types`
--
ALTER TABLE `patient_types`
  MODIFY `PatientTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_type_categories`
--
ALTER TABLE `patient_type_categories`
  MODIFY `PatientTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `patient_visits`
--
ALTER TABLE `patient_visits`
  MODIFY `PatientVisitId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `performed_procedures`
--
ALTER TABLE `performed_procedures`
  MODIFY `PerformedProcedureId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `performed_procedure_records`
--
ALTER TABLE `performed_procedure_records`
  MODIFY `PerformedProcedureRecordId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `performed_procedure_record_types`
--
ALTER TABLE `performed_procedure_record_types`
  MODIFY `PerformedProcedureRecordTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `performed_procedure_record_type_category`
--
ALTER TABLE `performed_procedure_record_type_category`
  MODIFY `PerformedProcedureRecordTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `procedures`
--
ALTER TABLE `procedures`
  MODIFY `ProcedureId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `procedure_types`
--
ALTER TABLE `procedure_types`
  MODIFY `ProcedureTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `procedure_type_categories`
--
ALTER TABLE `procedure_type_categories`
  MODIFY `ProcedureTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `radiology`
--
ALTER TABLE `radiology`
  MODIFY `RadiologyId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `radiology_orders`
--
ALTER TABLE `radiology_orders`
  MODIFY `RadiologyOrderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `radiology_order_results`
--
ALTER TABLE `radiology_order_results`
  MODIFY `RadiologyResultOrderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `radiology_order_result_categories`
--
ALTER TABLE `radiology_order_result_categories`
  MODIFY `RadiologyOrderResultCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `radiology_order_types`
--
ALTER TABLE `radiology_order_types`
  MODIFY `RadiologyOrderTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `RoleId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role_types`
--
ALTER TABLE `role_types`
  MODIFY `RoleTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role_type_categories`
--
ALTER TABLE `role_type_categories`
  MODIFY `RoleTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `schedules`
--
ALTER TABLE `schedules`
  MODIFY `ScheduleId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `slots`
--
ALTER TABLE `slots`
  MODIFY `SlotId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `slot_types`
--
ALTER TABLE `slot_types`
  MODIFY `SlotTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `slot_type_category`
--
ALTER TABLE `slot_type_category`
  MODIFY `SlotTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `specimen`
--
ALTER TABLE `specimen`
  MODIFY `SpecimenId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `specimen_records`
--
ALTER TABLE `specimen_records`
  MODIFY `SpecimenRecordId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `specimen_record_categories`
--
ALTER TABLE `specimen_record_categories`
  MODIFY `SpecimenRecordCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `specimen_types`
--
ALTER TABLE `specimen_types`
  MODIFY `SpecimenTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sponsors`
--
ALTER TABLE `sponsors`
  MODIFY `SponsorId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sponsor_types`
--
ALTER TABLE `sponsor_types`
  MODIFY `SponsorTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test_orders`
--
ALTER TABLE `test_orders`
  MODIFY `TestOrderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test_order_types`
--
ALTER TABLE `test_order_types`
  MODIFY `TestOrderTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `test_order_type_category`
--
ALTER TABLE `test_order_type_category`
  MODIFY `TestOrderTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `UserId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `wards`
--
ALTER TABLE `wards`
  MODIFY `WardId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ward_types`
--
ALTER TABLE `ward_types`
  MODIFY `WardTypeId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ward_type_category`
--
ALTER TABLE `ward_type_category`
  MODIFY `WardTypeCategoryId` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appointments`
--
ALTER TABLE `appointments`
  ADD CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`AppointmentTypeCategoryId`) REFERENCES `appointment_type_category` (`AppointmentTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_ibfk_2` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_ibfk_3` FOREIGN KEY (`EncounterId`) REFERENCES `encounters` (`EncounterId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `appointments_ibfk_4` FOREIGN KEY (`SlotId`) REFERENCES `slots` (`SlotId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `appointment_type_category`
--
ALTER TABLE `appointment_type_category`
  ADD CONSTRAINT `appointment_type_category_ibfk_1` FOREIGN KEY (`AppointmentTypeId`) REFERENCES `appointment_types` (`AppointmentTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `beds`
--
ALTER TABLE `beds`
  ADD CONSTRAINT `beds_ibfk_1` FOREIGN KEY (`BedTypeId`) REFERENCES `bed_type` (`BedTypeId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `beds_ibfk_2` FOREIGN KEY (`BedGroupId`) REFERENCES `bed_group` (`BedGroupId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `bed_allocation`
--
ALTER TABLE `bed_allocation`
  ADD CONSTRAINT `bed_allocation_ibfk_1` FOREIGN KEY (`PatientRevisitId`) REFERENCES `patient_revisits` (`PatientRevisitId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bed_allocation_ibfk_2` FOREIGN KEY (`BedId`) REFERENCES `beds` (`BedId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bed_allocation_ibfk_3` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `claims`
--
ALTER TABLE `claims`
  ADD CONSTRAINT `claims_ibfk_1` FOREIGN KEY (`PerformedProcedureId`) REFERENCES `performed_procedures` (`PerformedProcedureId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `claims_ibfk_2` FOREIGN KEY (`MedicationRequestId`) REFERENCES `medication_request` (`MedicationRequestId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `claims_ibfk_3` FOREIGN KEY (`BedAllocationId`) REFERENCES `bed_allocation` (`BedAllocationId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `claims_ibfk_4` FOREIGN KEY (`TestOrderId`) REFERENCES `test_orders` (`TestOrderId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `claims_ibfk_5` FOREIGN KEY (`RadiologyOrderId`) REFERENCES `radiology_orders` (`RadiologyOrderId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `claims_ibfk_6` FOREIGN KEY (`PatientRevisitId`) REFERENCES `patient_revisits` (`PatientRevisitId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `departments`
--
ALTER TABLE `departments`
  ADD CONSTRAINT `departments_ibfk_1` FOREIGN KEY (`DepartmentTypeCategoryId`) REFERENCES `department_type_categories` (`DepartmentTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `department_type_categories`
--
ALTER TABLE `department_type_categories`
  ADD CONSTRAINT `department_type_categories_ibfk_1` FOREIGN KEY (`DepartmentTypeId`) REFERENCES `department_types` (`DepartmentTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `diagnosis`
--
ALTER TABLE `diagnosis`
  ADD CONSTRAINT `diagnosis_ibfk_1` FOREIGN KEY (`PatientRevisitId`) REFERENCES `patient_revisits` (`PatientRevisitId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `diagnosis_records`
--
ALTER TABLE `diagnosis_records`
  ADD CONSTRAINT `diagnosis_records_ibfk_1` FOREIGN KEY (`DiagnosisRecordTypeCategoryId`) REFERENCES `diagnosis_record_type_categories` (`DiagnosisRecordTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `diagnosis_records_ibfk_2` FOREIGN KEY (`DiagnosisId`) REFERENCES `diagnosis` (`DiagnosisId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `diagnosis_record_type_categories`
--
ALTER TABLE `diagnosis_record_type_categories`
  ADD CONSTRAINT `diagnosis_record_type_categories_ibfk_1` FOREIGN KEY (`DiagnosisRecordTypeId`) REFERENCES `diagnosis_record_types` (`DiagnosisRecordTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `drug_configurations`
--
ALTER TABLE `drug_configurations`
  ADD CONSTRAINT `drug_configurations_ibfk_1` FOREIGN KEY (`GenericDrugCategoryId`) REFERENCES `generic_drug_categories` (`GenericDrugCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `encounters`
--
ALTER TABLE `encounters`
  ADD CONSTRAINT `encounters_ibfk_1` FOREIGN KEY (`PatientRevisitId`) REFERENCES `patient_revisits` (`PatientRevisitId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `encounters_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `expected_appointment_activities`
--
ALTER TABLE `expected_appointment_activities`
  ADD CONSTRAINT `expected_appointment_activities_ibfk_1` FOREIGN KEY (`ExpectedAppointmentActivityCategoryId`) REFERENCES `expected_appointment_activity_categories` (`ExpectedAppointmentActivityCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `expected_appointment_activities_ibfk_2` FOREIGN KEY (`AppointmentId`) REFERENCES `appointments` (`AppointmentId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `labs`
--
ALTER TABLE `labs`
  ADD CONSTRAINT `labs_ibfk_1` FOREIGN KEY (`LabCategoryId`) REFERENCES `lab_categories` (`LabCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medication_administration`
--
ALTER TABLE `medication_administration`
  ADD CONSTRAINT `medication_administration_ibfk_1` FOREIGN KEY (`MedicationRequestDetailId`) REFERENCES `medication_request_details` (`MedicationRequestDetailId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medication_request`
--
ALTER TABLE `medication_request`
  ADD CONSTRAINT `medication_request_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medication_request_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medication_request_ibfk_3` FOREIGN KEY (`DiagnosisId`) REFERENCES `diagnosis` (`DiagnosisId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medication_request_ibfk_4` FOREIGN KEY (`PatientRevisitId`) REFERENCES `patient_revisits` (`PatientRevisitId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medication_request_details`
--
ALTER TABLE `medication_request_details`
  ADD CONSTRAINT `medication_request_details_ibfk_1` FOREIGN KEY (`MedicationRequestId`) REFERENCES `medication_request` (`MedicationRequestId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `medication_request_details_ibfk_2` FOREIGN KEY (`DrugConfigurationId`) REFERENCES `drug_configurations` (`DrugConfigurationId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `medication_statement`
--
ALTER TABLE `medication_statement`
  ADD CONSTRAINT `medication_statement_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_checkups`
--
ALTER TABLE `patient_checkups`
  ADD CONSTRAINT `patient_checkups_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_checkups_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_checkups_ibfk_3` FOREIGN KEY (`PatientRevisitId`) REFERENCES `patient_revisits` (`PatientRevisitId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_condition`
--
ALTER TABLE `patient_condition`
  ADD CONSTRAINT `patient_condition_ibfk_1` FOREIGN KEY (`PatientCheckUpId`) REFERENCES `patient_checkups` (`PatientCheckUpId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_custodian`
--
ALTER TABLE `patient_custodian`
  ADD CONSTRAINT `patient_custodian_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_general_records`
--
ALTER TABLE `patient_general_records`
  ADD CONSTRAINT `patient_general_records_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_general_records_ibfk_2` FOREIGN KEY (`PatientGeneralRecordTypeCategoryId`) REFERENCES `patient_general_record_type_categories` (`PatientGeneralRecordTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_general_record_type_categories`
--
ALTER TABLE `patient_general_record_type_categories`
  ADD CONSTRAINT `patient_general_record_type_categories_ibfk_1` FOREIGN KEY (`PatientGeneralRecordTypeId`) REFERENCES `patient_general_record_types` (`PatientGeneralRecordTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_individual_qualities`
--
ALTER TABLE `patient_individual_qualities`
  ADD CONSTRAINT `patient_individual_qualities_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_individual_qualities_ibfk_2` FOREIGN KEY (`PatientTypeCategoryId`) REFERENCES `patient_type_categories` (`PatientTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_revisits`
--
ALTER TABLE `patient_revisits`
  ADD CONSTRAINT `patient_revisits_ibfk_1` FOREIGN KEY (`PatientVisitId`) REFERENCES `patient_visits` (`PatientVisitId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_sponsors`
--
ALTER TABLE `patient_sponsors`
  ADD CONSTRAINT `patient_sponsors_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `patient_sponsors_ibfk_2` FOREIGN KEY (`SponsorId`) REFERENCES `sponsors` (`SponsorId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_type_categories`
--
ALTER TABLE `patient_type_categories`
  ADD CONSTRAINT `patient_type_categories_ibfk_1` FOREIGN KEY (`PatientTypeId`) REFERENCES `patient_types` (`PatientTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `patient_visits`
--
ALTER TABLE `patient_visits`
  ADD CONSTRAINT `patient_visits_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `performed_procedures`
--
ALTER TABLE `performed_procedures`
  ADD CONSTRAINT `performed_procedures_ibfk_1` FOREIGN KEY (`ProcedureId`) REFERENCES `procedures` (`ProcedureId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `performed_procedures_ibfk_2` FOREIGN KEY (`EncounterId`) REFERENCES `encounters` (`EncounterId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `performed_procedure_records`
--
ALTER TABLE `performed_procedure_records`
  ADD CONSTRAINT `performed_procedure_records_ibfk_1` FOREIGN KEY (`PerformedProcedureId`) REFERENCES `performed_procedures` (`PerformedProcedureId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `performed_procedure_records_ibfk_2` FOREIGN KEY (`PerformedProcedureId`) REFERENCES `performed_procedures` (`PerformedProcedureId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `performed_procedure_records_ibfk_3` FOREIGN KEY (`PerformedProcedureRecordTypeCategoryId`) REFERENCES `performed_procedure_record_type_category` (`PerformedProcedureRecordTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `performed_procedure_record_type_category`
--
ALTER TABLE `performed_procedure_record_type_category`
  ADD CONSTRAINT `performed_procedure_record_type_category_ibfk_1` FOREIGN KEY (`PerformedProcedureRecordTypeId`) REFERENCES `performed_procedure_record_types` (`PerformedProcedureRecordTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `procedures`
--
ALTER TABLE `procedures`
  ADD CONSTRAINT `procedures_ibfk_1` FOREIGN KEY (`ProcedureTypeCategoryId`) REFERENCES `procedure_type_categories` (`ProcedureTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `procedure_type_categories`
--
ALTER TABLE `procedure_type_categories`
  ADD CONSTRAINT `procedure_type_categories_ibfk_1` FOREIGN KEY (`ProcedureTypeId`) REFERENCES `procedure_types` (`ProcedureTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `radiology_orders`
--
ALTER TABLE `radiology_orders`
  ADD CONSTRAINT `radiology_orders_ibfk_1` FOREIGN KEY (`RadiologyOrderTypeId`) REFERENCES `radiology_order_types` (`RadiologyOrderTypeId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `radiology_orders_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `radiology_orders_ibfk_3` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `radiology_orders_ibfk_4` FOREIGN KEY (`EncounterId`) REFERENCES `encounters` (`EncounterId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `radiology_order_results`
--
ALTER TABLE `radiology_order_results`
  ADD CONSTRAINT `radiology_order_results_ibfk_1` FOREIGN KEY (`RadiologyOrderResultCategoryId`) REFERENCES `radiology_order_result_categories` (`RadiologyOrderResultCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `radiology_order_results_ibfk_2` FOREIGN KEY (`RadiologyOrderId`) REFERENCES `radiology_orders` (`RadiologyOrderId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `roles`
--
ALTER TABLE `roles`
  ADD CONSTRAINT `roles_ibfk_1` FOREIGN KEY (`RoleTypeCategoryId`) REFERENCES `role_type_categories` (`RoleTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `roles_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `role_type_categories`
--
ALTER TABLE `role_type_categories`
  ADD CONSTRAINT `role_type_categories_ibfk_1` FOREIGN KEY (`RoleTypeId`) REFERENCES `role_types` (`RoleTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `schedules`
--
ALTER TABLE `schedules`
  ADD CONSTRAINT `schedules_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `schedules_ibfk_2` FOREIGN KEY (`SlotId`) REFERENCES `slots` (`SlotId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `slots`
--
ALTER TABLE `slots`
  ADD CONSTRAINT `slots_ibfk_1` FOREIGN KEY (`SlotTypeCategoryId`) REFERENCES `slot_type_category` (`SlotTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `slots_ibfk_2` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `slot_type_category`
--
ALTER TABLE `slot_type_category`
  ADD CONSTRAINT `slot_type_category_ibfk_1` FOREIGN KEY (`SlotTypeId`) REFERENCES `slot_types` (`SlotTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `specimen`
--
ALTER TABLE `specimen`
  ADD CONSTRAINT `specimen_ibfk_1` FOREIGN KEY (`SpecimenTypeId`) REFERENCES `specimen_types` (`SpecimenTypeId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `specimen_ibfk_2` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `specimen_ibfk_3` FOREIGN KEY (`EncounterId`) REFERENCES `encounters` (`EncounterId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `specimen_records`
--
ALTER TABLE `specimen_records`
  ADD CONSTRAINT `specimen_records_ibfk_1` FOREIGN KEY (`SpecimenRecordCategoryId`) REFERENCES `specimen_record_categories` (`SpecimenRecordCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `specimen_records_ibfk_2` FOREIGN KEY (`SpecimenId`) REFERENCES `specimen` (`SpecimenId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sponsors`
--
ALTER TABLE `sponsors`
  ADD CONSTRAINT `sponsors_ibfk_1` FOREIGN KEY (`SponsorTypeId`) REFERENCES `sponsor_types` (`SponsorTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `test_orders`
--
ALTER TABLE `test_orders`
  ADD CONSTRAINT `test_orders_ibfk_1` FOREIGN KEY (`PatientId`) REFERENCES `patients` (`PatientId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_orders_ibfk_2` FOREIGN KEY (`EncounterId`) REFERENCES `encounters` (`EncounterId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_orders_ibfk_3` FOREIGN KEY (`LabId`) REFERENCES `labs` (`LabId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_orders_ibfk_4` FOREIGN KEY (`SpecimenId`) REFERENCES `specimen` (`SpecimenId`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `test_orders_ibfk_5` FOREIGN KEY (`UserId`) REFERENCES `users` (`UserId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `test_order_type_category`
--
ALTER TABLE `test_order_type_category`
  ADD CONSTRAINT `test_order_type_category_ibfk_1` FOREIGN KEY (`TestOrderTypeId`) REFERENCES `test_order_types` (`TestOrderTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`DepartmentId`) REFERENCES `departments` (`DepartmentId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `wards`
--
ALTER TABLE `wards`
  ADD CONSTRAINT `wards_ibfk_1` FOREIGN KEY (`WardTypeCategoryId`) REFERENCES `ward_type_category` (`WardTypeCategoryId`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `ward_type_category`
--
ALTER TABLE `ward_type_category`
  ADD CONSTRAINT `ward_type_category_ibfk_1` FOREIGN KEY (`WardTypeId`) REFERENCES `ward_types` (`WardTypeId`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
