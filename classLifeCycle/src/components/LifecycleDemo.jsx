import { Component } from "react";

class LifecycleDemo extends Component{
    constructor(props){
        super(props)
        this.state = {
            count : 0,
            logs: [],
            data: null,
            error: null
        };

        // Add Initial mounting phase log
        this.state.logs.push({
            phase: "Mounting",
            title: "1. Constructor",
            description: "First Method Called. Used for: \n• Initializing state\n• Binding methods\n• Setting up initial configuration",
            timeStamp: new Date().toLocaleTimeString()
        });
    }

    static getDerivedStateFromProps(props, state){
        // This method is called in both mounting and updating phases
        const phase = state.logs.length === 1 ? "Mounting" : "Updating";
        const order = phase === "Mounting" ? '2' : '1';

        return{
            logs: [...state.logs, {
                phase,
                title: '${order}.getDerivedStateFromProps',
                description:"Static method called before render. Used for:\n• Syncing state with props\n• Replacing componentWillReceiveProps\n• Must return new state or null",
                timeStamp: new Date().toLocaleTimeString()
            }]
        }
    }

    componentDidMount() {
        this.setState(prevState => ({
          logs: [...prevState.logs, {
            phase: 'Mounting',
            title: '4. componentDidMount',
            description: 'Called after component is mounted to DOM. Perfect for:\n• API calls\n• Subscriptions\n• DOM manipulations\n• Setting up timers',
            timestamp: new Date().toLocaleTimeString()
          }]
        }));
    
        setTimeout(() => {
          this.setState({ data: 'Fetched data' });
        }, 1500);
      }
      shouldComponentUpdate(nextProps, nextState) {
        if (this.state.count !== nextState.count) {
          this.setState(prevState => ({
            logs: [...prevState.logs, {
              phase: 'Updating',
              title: '2. shouldComponentUpdate',
              description: 'Performance optimization method. Used for:\n• Controlling re-renders\n• Preventing unnecessary updates\n• Must return true or false',
              timestamp: new Date().toLocaleTimeString()
            }]
          }));
        }
        return true;
      }
    
      getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          this.setState(prevState => ({
            logs: [...prevState.logs, {
              phase: 'Updating',
              title: '4. getSnapshotBeforeUpdate',
              description: 'Called right before DOM updates. Used for:\n• Capturing DOM info (e.g., scroll position)\n• Passing values to componentDidUpdate\n• Must return value or null',
              timestamp: new Date().toLocaleTimeString()
            }]
          }));
        }
        return null;
      }
    
      componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
          this.setState(prevState => ({
            logs: [...prevState.logs, {
              phase: 'Updating',
              title: '5. componentDidUpdate',
              description: 'Called after component updates. Used for:\n• Side effects after render\n• Network requests based on prop/state changes\n• DOM manipulations',
              timestamp: new Date().toLocaleTimeString()
            }]
          }));
        }
      }
    
      componentWillUnmount() {
        console.log({
          phase: 'Unmounting',
          title: 'componentWillUnmount',
          description: 'Called before component is destroyed. Used for:\n• Cleanup tasks\n• Cancelling network requests\n• Removing event listeners\n• Clearing timers'
        });
      }
    
      handleIncrement = () => {
        this.setState(prevState => ({
          count: prevState.count + 1,
          logs: [...prevState.logs, {
            phase: 'Updating',
            title: '3. render',
            description: 'Required method that returns JSX. Called when:\n• Initial mount\n• State changes\n• Props changes\n• Parent re-renders',
            timestamp: new Date().toLocaleTimeString()
          }]
        }));
    }

    render() {
        // Add render log for initial mounting
        if (this.state.logs.length === 2) {
          setTimeout(() => {
            this.setState(prevState => ({
              logs: [...prevState.logs, {
                phase: 'Mounting',
                title: '3. render',
                description: 'Required method that returns JSX. Called when:\n• Initial mount\n• State changes\n• Props changes\n• Parent re-renders',
                timestamp: new Date().toLocaleTimeString()
              }]
            }));
          }, 0);
        }
    
        return (
          <div className="lifecycle-demo">
            <h2>React Lifecycle Methods by Phase</h2>
            
            <div className="counter-section">
              <h3>Component State: {this.state.count}</h3>
              <button onClick={this.handleIncrement}>
                Trigger Update Phase
              </button>
              <p className="helper-text">
                Click to see updating lifecycle methods
              </p>
            </div>
    
            <div className="data-section">
              <h3>Async Data: {this.state.data || 'Loading...'}</h3>
            </div>
    
            <div className="logs-section">
              <h3>Lifecycle Method Logs:</h3>
              <div className="logs-container">
                {this.state.logs.map((log, index) => (
                  <div key={index} className={`log-entry ${log.phase.toLowerCase()}`}>
                    <div className="log-header">
                      <div>
                        <span className="phase-badge">{log.phase}</span>
                        <span className="log-title">{log.title}</span>
                      </div>
                      <span className="log-time">{log.timestamp}</span>
                    </div>
                    <pre className="log-description">{log.description}</pre>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      }
    }
    
    export default LifecycleDemo;;