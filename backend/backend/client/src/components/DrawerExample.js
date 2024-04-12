import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalWrapper';
import InputsGroup from './InputsGroup';

// Define the handleLocalTypeChange function outside of the component
const handleLocalTypeChange = (e, setLocalType) => {
  setLocalType(e.target.value);
};

// Define the handleExportTypeChange function outside of the component
const handleExportTypeChange = (e, setExportType) => {
  setExportType(e.target.value);
};

export default function DrawerExample() {
  const {
    onOpen,
    isOpen,
    onClose,
    Add,
    errors,
    setErrors,
    user,
    Update,
  } = useContext(GlobalContext);
  const [form, setForm] = useState({});
  const [localType, setLocalType] = useState(""); // State for local type
  const [ExportType, setExportType] = useState(""); // State for export type

  const onChangeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onAdd = () => {
    Add({ ...form, LocalType: localType, ExportType: ExportType }, setForm);
  };

  const onUpdate = () => {
    Update(
      { ...form, LocalType: localType, ExportType: ExportType },
      setForm,
      form._id
    );
  };

  useEffect(() => {
    setForm(user);
    setLocalType(user?.LocalType || ""); // Set initial localType value from user
    setExportType(user?.ExportType || ""); // Set initial ExportType value from user
  }, [user]);

  return (
    <>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            onClick={() => {
              onClose();
              setErrors({});
              setForm({});
            }}
          />
          <DrawerHeader>Create / Update user</DrawerHeader>

          <DrawerBody>
            <Stack spacing={'24px'}>
              <InputsGroup
                name="SocieteName"
                onChangeHandler={onChangeHandler}
                value={form?.SocieteName}
                errors={errors?.SocieteName}
              />
              <InputsGroup
                name="AgentName"
                onChangeHandler={onChangeHandler}
                value={form?.AgentName}
                errors={errors?.AgentName}
              />
              <InputsGroup
                name="age"
                onChangeHandler={onChangeHandler}
                value={form?.age}
                errors={errors?.age}
              />
              <InputsGroup
                name="SocieteLocalion"
                onChangeHandler={onChangeHandler}
                value={form?.SocieteLocalion}
                errors={errors?.SocieteLocalion}
              />
              <InputsGroup
                name="LegalForm"
                onChangeHandler={onChangeHandler}
                value={form?.LegalForm}
                errors={errors?.LegalForm}
              />
               <InputsGroup
                name="Activity"
                onChangeHandler={onChangeHandler}
                value={form?.Activity}
                errors={errors?.Activity}
              />
               <InputsGroup
                name="Products"
                onChangeHandler={onChangeHandler}
                value={form?.Products}
                errors={errors?.Products}
              />
               <InputsGroup
                name="WorkshopLocation"
                onChangeHandler={onChangeHandler}
                value={form?.WorkshopLocation}
                errors={errors?.WorkshopLocation}
              />
               <InputsGroup
                name="WorkshopLocation"
                onChangeHandler={onChangeHandler}
                value={form?.WorkshopLocation}
                errors={errors?.WorkshopLocation}
              />
               <InputsGroup
                name="StorageLocation"
                onChangeHandler={onChangeHandler}
                value={form?.StorageLocation}
                errors={errors?.StorageLocation}
              />
               <InputsGroup
                name="WorkshopLocation"
                onChangeHandler={onChangeHandler}
                value={form?.WorkshopLocation}
                errors={errors?.WorkshopLocation}
              />
               <InputsGroup
                name="PhoneNumber"
                onChangeHandler={onChangeHandler}
                value={form?.PhoneNumber}
                errors={errors?.PhoneNumber}
              />
               <InputsGroup
                name="Fax"
                onChangeHandler={onChangeHandler}
                value={form?.Fax}
                errors={errors?.Fax}
              />
               <InputsGroup
                name="email"
                onChangeHandler={onChangeHandler}
                value={form?.email}
                errors={errors?.email}
              />
               <InputsGroup
                name="NumberOfAdmins"
                onChangeHandler={onChangeHandler}
                value={form?.NumberOfAdmins}
                errors={errors?.NumberOfAdmins}
              />
               <InputsGroup
                name="NumberOfWorkers"
                onChangeHandler={onChangeHandler}
                value={form?.NumberOfWorkers}
                errors={errors?.NumberOfWorkers}
              />
              <div>
                <input
                  type="radio"
                  id="1"
                  name="localType"
                  value="كليا"
                  checked={localType === 'كليا'}
                  onChange={(e) => handleLocalTypeChange(e, setLocalType)}
                />
                <label htmlFor="1">كليا</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="2"
                  name="localType"
                  value="جزئيا"
                  checked={localType === 'جزئيا'}
                  onChange={(e) => handleLocalTypeChange(e, setLocalType)}
                />
                <label htmlFor="2">جزئيا</label>
              </div>
              
              <div>
                <input
                  type="radio"
                  id="11"
                  name="ExportType"
                  value="ملك"
                  checked={ExportType === 'ملك'}
                  onChange={(e) => handleExportTypeChange(e, setExportType)}
                />
                <label htmlFor="11">ملك</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="22"
                  name="ExportType"
                  value="كراء"
                  checked={ExportType === 'كراء'}
                  onChange={(e) => handleExportTypeChange(e, setExportType)}
                />
                <label htmlFor="22">كراء</label>
              </div>
              <InputsGroup
                name="TaxID"
                onChangeHandler={onChangeHandler}
                value={form?.TaxID}
                errors={errors?.TaxID}
              />
                <InputsGroup
                name="DiwaniID"
                onChangeHandler={onChangeHandler}
                value={form?.DiwaniID}
                errors={errors?.DiwaniID}
              />
                <InputsGroup
                name="CommercialID"
                onChangeHandler={onChangeHandler}
                value={form?.CommercialID}
                errors={errors?.CommercialID}
              />
            </Stack>
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => {
                onClose();
                setErrors({});
                setForm({});
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="blue"
              onClick={() => (form._id ? onUpdate() : onAdd())}
            >
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
