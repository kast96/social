import { Field, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { FilterType } from "../../redux/users-reducer";
import { getStateFilter } from "../../redux/users-selectors";

const usersSearchFormValidate = (values: any) => {
	const errors = {};
	return errors;
}

type FormType = {
	term: string
	friend: string
}

type PropsType = {
	onFilterChanged: (filter: FilterType) => void
}

let UsersSearchForm: React.FC<PropsType> = React.memo(({onFilterChanged}) => {
	const filter = useSelector(getStateFilter)
	
	const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
		const filter: FilterType = {
			term: values.term,
			friend: values.friend === "null" ? null :
				values.friend === "true" ? true : false
		}
		onFilterChanged(filter);
		setSubmitting(false);
	}

	return (
		<Formik
			enableReinitialize={true}
			initialValues={{ term: filter.term, friend: String(filter.friend) }}
			validate={usersSearchFormValidate}
			onSubmit={submit}
		>
			{({ isSubmitting }) => (
				<Form>
					<Field type="text" name="term" />
					<Field as="select" name="friend">
						<option value="null">All</option>
						<option value="true">Only folllowed</option>
						<option value="false">Only unfolllowed</option>
					</Field>
					<button type="submit" disabled={isSubmitting}>Find</button>
				</Form>
			)}
		</Formik>
	)
})

export default UsersSearchForm;
