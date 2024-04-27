import React, { Component, ErrorInfo } from "react";

interface IErrorBoundaryProps {
    children: React.ReactNode;
}

interface IErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {

    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false}
    }

    static getDerivedStateFromError() {
        return {
            hasError: true
        }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error);
        console.log(errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundary;