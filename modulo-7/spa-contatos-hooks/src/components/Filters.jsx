import React from 'react';

class Filters extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			textFilter:""
		}
	}
	
	handleChange = e => {
		this.setState({
			textFilter: e.target.value
		})
		
		this.props.onChange(e.target.value)
	}

	render() {
		const {doSort, selectFilter} = this.props;

		return (
		<div className="container" data-testid="filters">
			<section className="filters">
				<div className="filters__search">
				<input 
					type="text" 
					className="filters__search__input" 
					placeholder="Pesquisar" 
					onChange={this.handleChange}
					value={this.state.textFilter}
					/>
				</div>

				<button 
					type="button"
					className={`filters__item ${selectFilter === 'name' && 'is-selected'}`}
					onClick={() => doSort('name')}
				>
				Nome
				</button>

				<button 
					type="button"
					className={`filters__item ${selectFilter === 'country' && 'is-selected'}`}
					onClick={() => doSort('country')}
				>
				País
				</button>

				<button 
					type="button"
					className={`filters__item ${selectFilter === 'company' && 'is-selected'}`}
					onClick={() => doSort('company')}
				>
				Empresa
				</button>

				<button 
					type="button"
					className={`filters__item ${selectFilter === 'department' && 'is-selected'}`}
					onClick={() => doSort('department')}
				>
				Departamento
				</button>

				<button 
					type="button"
					className={`filters__item ${selectFilter === 'admissionDate' && 'is-selected'}`}
					onClick={() => doSort('admissionDate')}
				>
				Data de admissão
				</button>
			</section>
		</div>
		);
	}
}

export default Filters;
